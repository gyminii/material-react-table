import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export interface ApiEntry {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
  link: string;
  linkText: string;
  required: boolean;
  source: string;
}

export const CATEGORIES = [
  'tableOptions',
  'columnOptions',
  'stateOptions',
  'tableInstanceAPIs',
  'columnInstanceAPIs',
  'rowInstanceAPIs',
  'cellInstanceAPIs',
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface ApiData {
  libraryVersion: string;
  categories: Record<Category, ApiEntry[]>;
}

/** A guide, reference page or skill: one Markdown document in data/. */
export interface DocEntry {
  name: string;
  title: string;
  description: string;
  headings: string[];
}

export interface ExampleEntry {
  id: string;
  /** Guides whose page embeds this example. */
  guides: string[];
  /** Docs example pages (pages/docs/examples/*) that embed this example. */
  pages: string[];
}

export interface DocsIndex {
  guides: DocEntry[];
  reference: DocEntry[];
  skills: DocEntry[];
  examples: ExampleEntry[];
}

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'data');

export const loadApi = (): ApiData =>
  JSON.parse(readFileSync(join(dataDir, 'api.json'), 'utf8')) as ApiData;

export const loadDocsIndex = (): DocsIndex =>
  JSON.parse(readFileSync(join(dataDir, 'index.json'), 'utf8')) as DocsIndex;

export const loadMigrationGuide = (): string =>
  readFileSync(join(dataDir, 'MIGRATION.md'), 'utf8');

export const listSkills = (): string[] =>
  readdirSync(join(dataDir, 'skills'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

export const loadSkill = (name: string): string | undefined => {
  if (!listSkills().includes(name)) return undefined;
  return readFileSync(join(dataDir, 'skills', name, 'SKILL.md'), 'utf8');
};

const safeName = /^[a-z0-9-]+$/;

export const loadGuide = (name: string): string | undefined => {
  const file = join(dataDir, 'guides', `${name}.md`);
  if (!safeName.test(name) || !existsSync(file)) return undefined;
  return readFileSync(file, 'utf8');
};

export const loadReference = (name: string): string | undefined => {
  const file = join(dataDir, 'reference', `${name}.md`);
  if (!safeName.test(name) || !existsSync(file)) return undefined;
  return readFileSync(file, 'utf8');
};

export const loadExample = (id: string): string | undefined => {
  const file = join(dataDir, 'examples', `${id}.tsx`);
  if (!safeName.test(id) || !existsSync(file)) return undefined;
  return readFileSync(file, 'utf8');
};

export interface SearchHit extends ApiEntry {
  category: Category;
  score: number;
}

const tokenize = (query: string): string[] =>
  query.toLowerCase().split(/\s+/).filter(Boolean);

/** Ranks name matches above description matches; exact and prefix matches first. */
export const searchApi = (
  api: ApiData,
  query: string,
  categories: readonly Category[] = CATEGORIES,
  limit = 20,
): SearchHit[] => {
  const terms = tokenize(query);
  if (terms.length === 0) return [];
  const hits: SearchHit[] = [];
  for (const category of categories) {
    for (const entry of api.categories[category]) {
      const name = entry.name.toLowerCase();
      const description = entry.description.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (name === term) score += 100;
        else if (name.startsWith(term)) score += 60;
        else if (name.includes(term)) score += 40;
        else if (description.includes(term)) score += 10;
        else {
          score = 0;
          break;
        }
      }
      if (score > 0) hits.push({ ...entry, category, score });
    }
  }
  return hits
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, limit);
};

export type DocKind = 'guide' | 'reference' | 'skill' | 'example';

export interface DocsHit {
  kind: DocKind;
  name: string;
  summary: string;
  score: number;
}

/** Every term must match the name, title, headings, or description of a document. */
export const searchDocs = (
  index: DocsIndex,
  query: string,
  limit = 20,
  kinds: readonly DocKind[] = ['guide', 'reference', 'skill', 'example'],
): DocsHit[] => {
  const terms = tokenize(query);
  if (terms.length === 0) return [];
  const docs: Array<{
    kind: DocKind;
    name: string;
    summary: string;
    text: string;
  }> = [];
  const pushDoc = (kind: DocKind, entry: DocEntry) =>
    docs.push({
      kind,
      name: entry.name,
      summary: entry.description || entry.title,
      text: [entry.title, ...entry.headings, entry.description]
        .join(' ')
        .toLowerCase(),
    });
  index.guides.forEach((entry) => pushDoc('guide', entry));
  index.reference.forEach((entry) => pushDoc('reference', entry));
  index.skills.forEach((entry) => pushDoc('skill', entry));
  index.examples.forEach((entry) =>
    docs.push({
      kind: 'example',
      name: entry.id,
      summary: entry.guides.length
        ? `used in guides: ${entry.guides.join(', ')}`
        : entry.pages.length
          ? `shown on example pages: ${entry.pages.join(', ')}`
          : 'standalone example',
      text: [...entry.guides, ...entry.pages].join(' ').toLowerCase(),
    }),
  );
  const hits: DocsHit[] = [];
  for (const doc of docs) {
    if (!kinds.includes(doc.kind)) continue;
    const name = doc.name.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (name === term) score += 100;
      else if (name.split('-').includes(term)) score += 60;
      else if (name.includes(term)) score += 40;
      else if (doc.text.includes(term)) score += 10;
      else {
        score = 0;
        break;
      }
    }
    if (score > 0)
      hits.push({
        kind: doc.kind,
        name: doc.name,
        summary: doc.summary,
        score,
      });
  }
  return hits
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, limit);
};

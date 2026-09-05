import { readdirSync, readFileSync } from 'node:fs';
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

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'data');

export const loadApi = (): ApiData =>
  JSON.parse(readFileSync(join(dataDir, 'api.json'), 'utf8')) as ApiData;

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

export interface SearchHit extends ApiEntry {
  category: Category;
  score: number;
}

/** Ranks name matches above description matches; exact and prefix matches first. */
export const searchApi = (
  api: ApiData,
  query: string,
  categories: readonly Category[] = CATEGORIES,
  limit = 20,
): SearchHit[] => {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
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

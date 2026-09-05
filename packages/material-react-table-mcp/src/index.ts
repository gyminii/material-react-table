#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

import {
  type ApiEntry,
  CATEGORIES,
  type Category,
  listSkills,
  loadApi,
  loadMigrationGuide,
  loadSkill,
  searchApi,
} from './data.js';

const api = loadApi();

const categoryDescriptions: Record<Category, string> = {
  tableOptions:
    'options passed to useMaterialReactTable (props of MaterialReactTable)',
  columnOptions: 'options on an MRT_ColumnDef column definition',
  stateOptions:
    'slices of MRT_TableState, each with an initialState key, a state key, and an on*Change callback',
  tableInstanceAPIs:
    'methods on the MRT_TableInstance returned by useMaterialReactTable',
  columnInstanceAPIs: 'methods on an MRT_Column instance',
  rowInstanceAPIs: 'methods on an MRT_Row instance',
  cellInstanceAPIs: 'methods on an MRT_Cell instance',
};

const formatEntry = (entry: ApiEntry, category: Category): string => {
  const lines = [`### ${entry.name}`, `Category: ${category}`];
  if (entry.type) lines.push(`Type: \`${entry.type}\``);
  if (entry.defaultValue) lines.push(`Default: \`${entry.defaultValue}\``);
  if (entry.required) lines.push('Required: yes');
  if (entry.source) lines.push(`Source library: ${entry.source}`);
  if (entry.description) lines.push('', entry.description);
  if (entry.link)
    lines.push('', `More: ${entry.linkText || entry.link} <${entry.link}>`);
  return lines.join('\n');
};

const text = (value: string) => ({
  content: [{ type: 'text' as const, text: value }],
});

const server = new McpServer({
  name: 'material-react-table',
  version: api.libraryVersion,
});

server.registerTool(
  'search_mrt_api',
  {
    title: 'Search the Material React Table API',
    description: `Search Material React Table V${api.libraryVersion.split('.')[0]} (@mini_7/material-react-table) table options, column options, state slices, and table/column/row/cell instance methods by name or description. Use this first when unsure which option or method exists.`,
    inputSchema: {
      query: z
        .string()
        .min(1)
        .describe(
          'Words to match against option or method names and descriptions, e.g. "pinning", "muiTableBodyRowProps", "manual pagination".',
        ),
      categories: z
        .array(z.enum(CATEGORIES))
        .optional()
        .describe('Restrict the search to these categories. Defaults to all.'),
      limit: z
        .number()
        .int()
        .min(1)
        .max(100)
        .optional()
        .describe('Maximum hits to return. Defaults to 20.'),
    },
  },
  async ({ query, categories, limit }) => {
    const hits = searchApi(api, query, categories ?? CATEGORIES, limit ?? 20);
    if (hits.length === 0) {
      return text(
        `No Material React Table API entries match "${query}". Try a shorter term, or list a category with list_mrt_api.`,
      );
    }
    return text(hits.map((hit) => formatEntry(hit, hit.category)).join('\n\n'));
  },
);

server.registerTool(
  'get_mrt_api',
  {
    title: 'Get one Material React Table API entry',
    description:
      'Return the type, default, source library, description, and docs link for one table option, column option, state slice, or instance method by exact name.',
    inputSchema: {
      name: z
        .string()
        .min(1)
        .describe(
          'Exact option, state, or method name, e.g. "enableRowSelection" or "getSelectedRowModel".',
        ),
      category: z
        .enum(CATEGORIES)
        .optional()
        .describe(
          'Category to look in. When omitted, every category is checked and all matches are returned.',
        ),
    },
  },
  async ({ name, category }) => {
    const matches: string[] = [];
    for (const cat of category ? [category] : CATEGORIES) {
      const entry = api.categories[cat].find((row) => row.name === name);
      if (entry) matches.push(formatEntry(entry, cat));
    }
    if (matches.length === 0) {
      const suggestions = searchApi(
        api,
        name,
        category ? [category] : CATEGORIES,
        5,
      ).map((hit) => `${hit.name} (${hit.category})`);
      return text(
        `"${name}" is not a Material React Table ${category ?? 'API'} entry.${suggestions.length ? ` Did you mean: ${suggestions.join(', ')}?` : ''}`,
      );
    }
    return text(matches.join('\n\n'));
  },
);

server.registerTool(
  'list_mrt_api',
  {
    title: 'List a Material React Table API category',
    description: `List every entry in one category with a one-line description. Categories: ${CATEGORIES.map((cat) => `${cat} (${categoryDescriptions[cat]})`).join('; ')}.`,
    inputSchema: {
      category: z.enum(CATEGORIES),
      prefix: z
        .string()
        .optional()
        .describe(
          'Only entries whose name starts with this prefix, e.g. "mui", "render", "enable", "on", "get".',
        ),
    },
  },
  async ({ category, prefix }) => {
    const rows = api.categories[category].filter(
      (row) => !prefix || row.name.startsWith(prefix),
    );
    if (rows.length === 0)
      return text(`No ${category} entries start with "${prefix}".`);
    const lines = rows.map((row) => {
      const summary = row.description.replace(/\s+/g, ' ').trim();
      const type = row.type ? ` \`${row.type}\`` : '';
      return `- ${row.name}${type}${summary ? ` - ${summary}` : ''}`;
    });
    return text(
      `${category}: ${categoryDescriptions[category]} (${rows.length} entries)\n\n${lines.join('\n')}`,
    );
  },
);

server.registerTool(
  'get_mrt_migration_guide',
  {
    title: 'Get the Material React Table V3 to V4 migration guide',
    description:
      'Return the full migration guide: switching from material-react-table to @mini_7/material-react-table, Material UI V9 changes (slotProps, date pickers), and every TanStack Table V9 rename and behaviour change.',
    inputSchema: {},
  },
  async () => text(loadMigrationGuide()),
);

server.registerTool(
  'get_mrt_skill',
  {
    title: 'Get a Material React Table agent skill',
    description: `Return one of the bundled SKILL.md guides for coding agents (${listSkills().join(', ')}). Call without a name to list them with their descriptions.`,
    inputSchema: {
      name: z
        .string()
        .optional()
        .describe('Skill name. Omit to list available skills.'),
    },
  },
  async ({ name }) => {
    if (!name) {
      const summaries = listSkills().map((skill) => {
        const body = loadSkill(skill) ?? '';
        const match = body.match(
          /description:\s*>?\s*\n?([\s\S]*?)\nmetadata:/,
        );
        const description = match ? match[1].replace(/\s+/g, ' ').trim() : '';
        return `- ${skill}: ${description}`;
      });
      return text(`Available skills:\n${summaries.join('\n')}`);
    }
    const skill = loadSkill(name);
    if (!skill)
      return text(
        `Unknown skill "${name}". Available: ${listSkills().join(', ')}.`,
      );
    return text(skill);
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);

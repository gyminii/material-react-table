/**
 * Builds the JSON the MCP server ships from the docs prop tables, the migration guide
 * and the agent skills in this monorepo. Run from packages/material-react-table-mcp.
 */
import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { cellInstanceAPIs } from '../../../apps/material-react-table-docs/components/prop-tables/cellInstanceAPIs';
import { columnInstanceAPIs } from '../../../apps/material-react-table-docs/components/prop-tables/columnInstanceAPIs';
import { columnOptions } from '../../../apps/material-react-table-docs/components/prop-tables/columnOptions';
import { rowInstanceAPIs } from '../../../apps/material-react-table-docs/components/prop-tables/rowInstanceAPIs';
import { stateOptions } from '../../../apps/material-react-table-docs/components/prop-tables/stateOptions';
import { tableInstanceAPIs } from '../../../apps/material-react-table-docs/components/prop-tables/tableInstanceAPIs';
import { tableOptions } from '../../../apps/material-react-table-docs/components/prop-tables/tableOptions';

import type { ApiEntry, ApiData } from '../src/data.js';

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, '..');
const repoRoot = join(pkgRoot, '..', '..');
const dataDir = join(pkgRoot, 'data');

type RawEntry = Record<string, unknown>;

const normalize = (rows: RawEntry[], nameKey: string): ApiEntry[] =>
  rows
    .map((row) => ({
      name: String(row[nameKey]),
      type: typeof row.type === 'string' ? row.type : '',
      defaultValue:
        typeof row.defaultValue === 'string' ? row.defaultValue : '',
      description: typeof row.description === 'string' ? row.description : '',
      link: typeof row.link === 'string' ? row.link : '',
      linkText: typeof row.linkText === 'string' ? row.linkText : '',
      required: row.required === true,
      source: typeof row.source === 'string' ? row.source : '',
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

const libraryPkg = JSON.parse(
  readFileSync(
    join(repoRoot, 'packages/material-react-table/package.json'),
    'utf8',
  ),
) as { version: string };

const api: ApiData = {
  libraryVersion: libraryPkg.version,
  categories: {
    tableOptions: normalize(tableOptions as RawEntry[], 'tableOption'),
    columnOptions: normalize(columnOptions as RawEntry[], 'columnOption'),
    stateOptions: normalize(stateOptions as RawEntry[], 'stateOption'),
    tableInstanceAPIs: normalize(
      tableInstanceAPIs as RawEntry[],
      'tableInstanceAPI',
    ),
    columnInstanceAPIs: normalize(
      columnInstanceAPIs as RawEntry[],
      'columnInstanceAPI',
    ),
    rowInstanceAPIs: normalize(rowInstanceAPIs as RawEntry[], 'rowInstanceAPI'),
    cellInstanceAPIs: normalize(
      cellInstanceAPIs as RawEntry[],
      'cellInstanceAPI',
    ),
  },
};

rmSync(dataDir, { recursive: true, force: true });
mkdirSync(dataDir, { recursive: true });
writeFileSync(join(dataDir, 'api.json'), JSON.stringify(api, null, 2));
cpSync(join(repoRoot, 'MIGRATION.md'), join(dataDir, 'MIGRATION.md'));
cpSync(
  join(repoRoot, 'packages/material-react-table/skills'),
  join(dataDir, 'skills'),
  {
    recursive: true,
  },
);

const counts = Object.entries(api.categories)
  .map(([key, rows]) => `${key}=${rows.length}`)
  .join(' ');
console.log(
  `Wrote data/api.json for @mini_7/material-react-table ${api.libraryVersion}: ${counts}`,
);

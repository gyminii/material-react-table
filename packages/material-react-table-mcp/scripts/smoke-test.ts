/** Starts the built server over stdio and exercises every tool. Run after `pnpm build`. */
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const client = new Client({ name: 'smoke-test', version: '0.0.0' });
await client.connect(
  new StdioClientTransport({
    command: process.execPath,
    args: [join(here, '..', 'dist', 'index.js')],
  }),
);

const textOf = (result: Awaited<ReturnType<Client['callTool']>>): string => {
  const content = result.content as Array<{ type: string; text?: string }>;
  return content.map((part) => part.text ?? '').join('\n');
};

const tools = (await client.listTools()).tools.map((tool) => tool.name).sort();
assert.deepEqual(tools, [
  'get_mrt_api',
  'get_mrt_example',
  'get_mrt_guide',
  'get_mrt_migration_guide',
  'get_mrt_reference',
  'get_mrt_skill',
  'list_mrt_api',
  'search_mrt_api',
  'search_mrt_docs',
]);

const docsSearch = textOf(
  await client.callTool({
    name: 'search_mrt_docs',
    arguments: { query: 'editing' },
  }),
);
assert.match(docsSearch, /- guide `editing` \(get_mrt_guide\)/);
assert.match(docsSearch, /- example `editing-crud-modal` \(get_mrt_example\)/);
assert.match(docsSearch, /- skill `editing` \(get_mrt_skill\)/);

const stemmedSearch = textOf(
  await client.callTool({
    name: 'search_mrt_docs',
    arguments: { query: 'filters' },
  }),
);
assert.match(stemmedSearch, /- guide `column-filtering` \(get_mrt_guide\)/);
const virtualizationSearch = textOf(
  await client.callTool({
    name: 'search_mrt_docs',
    arguments: { query: 'virtualizing' },
  }),
);
assert.match(
  virtualizationSearch,
  /- guide `virtualization` \(get_mrt_guide\)/,
);

const guides = textOf(
  await client.callTool({ name: 'get_mrt_guide', arguments: {} }),
);
assert.match(guides, /- column-filtering: /);
const guide = textOf(
  await client.callTool({
    name: 'get_mrt_guide',
    arguments: { name: 'editing' },
  }),
);
assert.match(guide, /^## Editing Feature Guide/);
assert.match(guide, /- `editDisplayMode` - type `/);
assert.match(guide, /Live examples: `editing-crud-modal`/);
assert.doesNotMatch(guide, /^import |<Head>|<TableOptionsTable/m);
const unknownGuide = textOf(
  await client.callTool({
    name: 'get_mrt_guide',
    arguments: { name: 'filter' },
  }),
);
assert.match(unknownGuide, /Unknown guide "filter"\. Did you mean: /);

const reference = textOf(
  await client.callTool({
    name: 'get_mrt_reference',
    arguments: { page: 'mrt-hooks' },
  }),
);
assert.match(reference, /^## MRT Hooks/);
assert.match(reference, /### useMaterialReactTable/);

const examples = textOf(
  await client.callTool({ name: 'get_mrt_example', arguments: {} }),
);
assert.match(examples, /- editing-crud-modal \(guides: editing; pages: /);
const example = textOf(
  await client.callTool({
    name: 'get_mrt_example',
    arguments: { id: 'basic' },
  }),
);
assert.match(example, /^\/\/ examples\/basic\/sandbox\/src\/TS\.tsx\n/);
assert.match(example, /useMaterialReactTable/);
const exampleJs = textOf(
  await client.callTool({
    name: 'get_mrt_example',
    arguments: { id: 'basic', language: 'js' },
  }),
);
assert.match(exampleJs, /const columns = useMemo\(/);
assert.doesNotMatch(exampleJs, /useMemo</);
const unknownExample = textOf(
  await client.callTool({
    name: 'get_mrt_example',
    arguments: { id: 'crud' },
  }),
);
assert.match(unknownExample, /Unknown example "crud"\. Did you mean: /);

const search = textOf(
  await client.callTool({
    name: 'search_mrt_api',
    arguments: { query: 'pinning' },
  }),
);
assert.match(search, /### enableColumnPinning/);
assert.match(search, /Category: tableOptions/);

const get = textOf(
  await client.callTool({
    name: 'get_mrt_api',
    arguments: { name: 'muiTableBodyRowProps' },
  }),
);
assert.match(get, /### muiTableBodyRowProps/);
assert.match(get, /Type: `/);

const missing = textOf(
  await client.callTool({
    name: 'get_mrt_api',
    arguments: { name: 'getLeftLeafColumns' },
  }),
);
assert.match(missing, /is not a Material React Table/);

const list = textOf(
  await client.callTool({
    name: 'list_mrt_api',
    arguments: { category: 'stateOptions', prefix: 'show' },
  }),
);
assert.match(list, /- showColumnFilters/);
assert.doesNotMatch(list, /- density/);

const migration = textOf(
  await client.callTool({ name: 'get_mrt_migration_guide', arguments: {} }),
);
assert.match(migration, /TanStack Table V9/);

const skills = textOf(
  await client.callTool({ name: 'get_mrt_skill', arguments: {} }),
);
assert.match(skills, /- getting-started:/);
const skill = textOf(
  await client.callTool({
    name: 'get_mrt_skill',
    arguments: { name: 'migrate-v3-to-v4' },
  }),
);
assert.match(skill, /name: migrate-v3-to-v4/);

await client.close();
console.log(`smoke test passed: ${tools.length} tools`);

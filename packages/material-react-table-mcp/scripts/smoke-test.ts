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
  'get_mrt_migration_guide',
  'get_mrt_skill',
  'list_mrt_api',
  'search_mrt_api',
]);

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

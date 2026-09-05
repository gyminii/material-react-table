# @mini_7/material-react-table-mcp

An [MCP](https://modelcontextprotocol.io) server that gives AI coding agents an exact reference for [Material React Table V4](https://github.com/gyminii/material-react-table) (`@mini_7/material-react-table`).
It serves the same data as the docs site's API pages, the V3 to V4 migration guide, and the agent skills bundled with the library.

## Tools

| Tool | Purpose |
| --- | --- |
| `search_mrt_api` | Search table options, column options, state slices, and instance methods by name or description. |
| `get_mrt_api` | Exact lookup of one entry: type, default, source library, description, docs link. |
| `list_mrt_api` | List one category, optionally filtered by a name prefix such as `mui`, `render`, `enable`, or `on`. |
| `get_mrt_migration_guide` | The full `MIGRATION.md` for moving from `material-react-table` V3 to V4. |
| `get_mrt_skill` | The `SKILL.md` guides shipped in `@mini_7/material-react-table/skills`. |

## Setup

Claude Code:

```bash
claude mcp add material-react-table -- npx -y @mini_7/material-react-table-mcp
```

Any client that launches stdio servers:

```json
{
  "mcpServers": {
    "material-react-table": {
      "command": "npx",
      "args": ["-y", "@mini_7/material-react-table-mcp"]
    }
  }
}
```

Node 22.12 or newer is required.

## Skills without the server

The library package ships the same skills for [TanStack Intent](https://www.npmjs.com/package/@tanstack/intent).
In a project that has `@mini_7/material-react-table` installed:

```bash
npx @tanstack/intent@latest list
npx @tanstack/intent@latest load @mini_7/material-react-table#getting-started
```

## Development

From this directory in the monorepo:

```bash
pnpm build   # regenerates data/ from the docs prop tables, MIGRATION.md and skills, then compiles
pnpm test    # starts the built server and exercises every tool
```

`data/` is generated; edit the docs prop tables under `apps/material-react-table-docs/components/prop-tables` instead.

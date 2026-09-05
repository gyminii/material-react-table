import { type MRT_Cell } from 'material-react-table';

export interface CellInstanceAPI {
  cellInstanceAPI: keyof MRT_Cell<CellInstanceAPI>;
  link?: string;
  linkText?: string;
  description?: string;
  type?: string;
}

export const cellInstanceAPIs: CellInstanceAPI[] = [
  {
    cellInstanceAPI: 'column',
    type: 'MRT_Column<TData>',
    description: 'The associated Column object for the cell.',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'getContext',
    type: '() => { table: Table<TData>; column: MRT_Column<TData, TValue>; row: MRT_Row<TData>; cell: Cell<TData, TValue>; getValue: <TTValue = TValue>() => TTValue; renderValue: <TTValue = TValue>() => TTValue | null; }',
    description:
      'Returns the rendering context (or props) for cell-based components like cells and aggregated cells.',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'getIsAggregated',
    type: 'Not Provided',
    description: 'Not Provided',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'getIsGrouped',
    type: 'Not Provided',
    description: 'Not Provided',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'getIsPlaceholder',
    type: 'Not Provided',
    description: 'Not Provided',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'getValue',
    type: '() => any',
    description:
      "Returns the value for the cell, accessed via the associated column's accessor key or accessor function.",
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'id',
    type: 'string',
    description: 'The unique ID for the cell across the entire table.',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'renderValue',
    type: 'Not Provided',
    description:
      'Works similar to getValue(), but has been deprecated in favor of the `flexRender` import.',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
  {
    cellInstanceAPI: 'row',
    type: 'MRT_Row<TData>',
    description: 'The associated Row object for the cell.',
    link: 'https://tanstack.com/table/v9/docs/guide/cells',
    linkText: 'TanStack Table Cell API Docs',
  },
];

import { type MRT_Row } from 'material-react-table';

export interface RowInstanceAPI {
  rowInstanceAPI: keyof MRT_Row<RowInstanceAPI>;
  link: string;
  linkText: string;
  description: string;
  type: string;
}

export const rowInstanceAPIs: RowInstanceAPI[] = [
  {
    rowInstanceAPI: 'columnFilters',
    type: 'Record<string, boolean>',
    description:
      'The column filters map for the row. This object tracks whether a row is passing/failing specific filters by their column ID.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    rowInstanceAPI: 'columnFiltersMeta',
    type: 'Record<string, any>',
    description:
      'The column filters meta map for the row. This object tracks any filter meta for a row as optionally provided during the filtering process.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    rowInstanceAPI: 'depth',
    type: 'number',
    description:
      'The depth of the row (if nested or grouped) relative to the root row array.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getAllCells',
    type: '() => MRT_Cell<TData>[]',
    description:
      'Builds one cell for each leaf column, including cells for hidden columns.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getCanExpand',
    type: '() => boolean',
    description: 'Checks whether this row can be expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    rowInstanceAPI: 'getCanMultiSelect',
    type: '() => boolean',
    description:
      'Checks whether this row can be selected alongside other rows.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getCanPin',
    type: '() => boolean',
    description: 'Checks whether this row can be pinned.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    rowInstanceAPI: 'getCanSelect',
    type: '() => boolean',
    description: 'Checks whether this row can currently be selected.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getCanSelectSubRows',
    type: '() => boolean',
    description:
      'Checks whether selecting this row should also select its subRows.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getCenterVisibleCells',
    type: '() => MRT_Cell<TData>[]',
    description:
      'Gets visible row cells whose columns are not pinned start or end.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    rowInstanceAPI: 'getGroupingValue',
    type: '(columnId: string) => unknown',
    description: 'Reads the value used to group this row for a column id.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    rowInstanceAPI: 'getIsAllParentsExpanded',
    type: '() => boolean',
    description: 'Checks whether every ancestor of this row is expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    rowInstanceAPI: 'getIsAllSubRowsSelected',
    type: '() => boolean',
    description: 'Checks whether all selectable descendants are selected.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getIsExpanded',
    type: '() => boolean',
    description: 'Checks whether this row is currently expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    rowInstanceAPI: 'getIsGrouped',
    type: '() => boolean',
    description: 'Checks whether this row represents a grouped row.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    rowInstanceAPI: 'getIsPinned',
    type: '() => RowPinningPosition',
    description:
      "Returns the pinned position of the row. (`'top'`, `'bottom'` or `false`)",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    rowInstanceAPI: 'getIsSelected',
    type: '() => boolean',
    description: 'Checks whether this row id is selected.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getIsSomeSelected',
    type: '() => boolean',
    description: 'Checks whether some selectable descendants are selected.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getLeafRows',
    type: '() => MRT_Row<TData>[]',
    description:
      'Returns the leaf rows for the row, not including any parent rows.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getStartVisibleCells',
    type: '() => MRT_Cell<TData>[]',
    description:
      'Gets visible row cells whose columns are pinned to logical start.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    rowInstanceAPI: 'getParentRow',
    type: '() => MRT_Row<TData> | null',
    description: 'Returns the parent row for the row, if it exists.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getParentRows',
    type: '() => MRT_Row<TData>[]',
    description:
      'Returns the parent rows for the row, all the way up to a root row.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getPinnedIndex',
    type: '() => number',
    description:
      'Returns the numeric pinned index of the row within a pinned row group.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    rowInstanceAPI: 'getEndVisibleCells',
    type: '() => MRT_Cell<TData>[]',
    description:
      'Gets visible row cells whose columns are pinned to logical end.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    rowInstanceAPI: 'getToggleExpandedHandler',
    type: '() => () => void',
    description: "Creates a handler that toggles this row's expanded state.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    rowInstanceAPI: 'getToggleSelectedHandler',
    type: '(opts?: ToggleSelectedOptions) => (event: unknown) => void',
    description:
      "Creates a checkbox-style handler that toggles this row's selected state. Pass the original checkbox click event, or a framework event whose `nativeEvent` is that click, so Shift range selection can detect the modifier key.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    rowInstanceAPI: 'getUniqueValues',
    type: '<TValue>(columnId: string) => TValue[]',
    description:
      'Reads the values this row contributes to faceting/grouping for a column.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getValue',
    type: '<TValue>(columnId: string) => TValue',
    description:
      "Reads this row's accessor value for a column id and caches the result.",
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'getVisibleCells',
    type: '() => MRT_Cell<TData>[]',
    description: "Gets this row's cells for currently visible columns.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    rowInstanceAPI: 'id',
    type: 'string',
    description:
      "The resolved unique identifier for the row resolved via the `options.getRowId` option. Defaults to the row's index (or relative index if it is a subRow).",
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'index',
    type: 'number',
    description:
      'The index of the row within its parent array (or the root data array).',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'original',
    type: 'TData',
    description:
      'The original row object provided to the table. If the row is a grouped row, the original row object will be the first original in the group.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'originalSubRows',
    type: 'ReadonlyArray<TData>',
    description:
      'An array of the original subRows as returned by the `options.getSubRows` option.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'parentId',
    type: 'string',
    description: "If nested, this row's parent row id.",
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'pin',
    type: '(position: RowPinningPosition, includeLeafRows?: boolean, includeParentRows?: boolean) => void',
    description:
      "Pins a row to the `'top'` or `'bottom'`, or unpins the row to the center if `false` is passed.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    rowInstanceAPI: 'renderValue',
    type: '<TValue>(columnId: string) => TValue',
    description:
      'Renders the value for the row in a given columnId the same as `getValue`, but will return the `renderFallbackValue` if no value is found.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'subRows',
    type: 'MRT_Row<TData>[]',
    description:
      'An array of subRows for the row as returned and created by the `options.getSubRows` option.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    rowInstanceAPI: 'toggleExpanded',
    type: '(expanded?: boolean) => void',
    description:
      'Toggles the expanded state (or sets it if `expanded` is provided) for the row.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    rowInstanceAPI: 'toggleSelected',
    type: '(value?: boolean, opts?: ToggleSelectedOptions) => void',
    description: 'Selects/deselects the row.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
];

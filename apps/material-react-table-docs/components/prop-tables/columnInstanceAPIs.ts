import { type MRT_Column } from 'material-react-table';

export interface ColumnInstanceAPI {
  columnInstanceAPI: keyof MRT_Column<ColumnInstanceAPI>;
  link?: string;
  linkText?: string;
  description?: string;
  type?: string;
}

export const columnInstanceAPIs: ColumnInstanceAPI[] = [
  {
    columnInstanceAPI: 'accessorFn',
    type: 'AccessorFn<TData>',
    description:
      'The resolved accessor function to use when extracting the value for the column from each row.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Column API Docs',
  },
  {
    columnInstanceAPI: 'clearSorting',
    type: '() => void',
    description: "Removes this column from the table's sorting state.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting API Docs',
  },
  {
    columnInstanceAPI: 'columnDef',
    type: 'ColumnDef<TData>',
    description: 'The original column def used to create the column.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns#columndef',
    linkText: 'TanStack Table Column API Docs',
  },
  {
    columnInstanceAPI: 'columns',
    type: 'MRT_ColumnDef<TData>[]',
    description: 'The child column (if the column is a group column).',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Column API Docs',
  },
  {
    columnInstanceAPI: 'depth',
    type: 'number',
    description:
      'The depth of the column (if grouped) relative to the root column def array.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Column API Docs',
  },
  {
    columnInstanceAPI: 'getAggregationFns',
    type: '() => MRT_AggregationFn<TData> | undefined',
    description:
      'Returns the aggregation function (either user-defined or automatic, depending on configuration).',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping API Docs',
  },
  {
    columnInstanceAPI: 'getAutoAggregationFn',
    type: '() => MRT_AggregationFn<TData> | undefined',
    description:
      'Infers `sum` for a numeric first row and `extent` for a Date first row.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    columnInstanceAPI: 'getAutoFilterFn',
    type: '() => MRT_FilterFn<TData>',
    description:
      'Returns an automatically calculated filter function for the column based off of the columns first known value.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'getAutoSortDir',
    type: '() => SortDirection',
    description:
      'Returns a sort direction automatically inferred based on the columns values.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getAutoSortFn',
    type: '() => MRT_SortFn<TData>',
    description:
      'Returns a sorting function automatically inferred based on the columns values.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getCanFilter',
    type: '() => boolean',
    description:
      'Checks whether this accessor column can currently be column-filtered.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'getCanGlobalFilter',
    type: '() => boolean',
    description:
      'Checks whether this accessor column participates in global filtering.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/global-filtering',
    linkText: 'TanStack Table Global Filtering Docs',
  },
  {
    columnInstanceAPI: 'getCanGroup',
    type: '() => boolean',
    description: 'Checks whether this column can currently be grouped.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    columnInstanceAPI: 'getCanHide',
    type: '() => boolean',
    description: 'Checks whether this column is allowed to be hidden.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    columnInstanceAPI: 'getCanMultiSort',
    type: '() => boolean',
    description: 'Returns whether this column can be multi-sorted.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getCanPin',
    type: '() => boolean',
    description:
      'Checks whether this column or any of its leaves can be pinned.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    columnInstanceAPI: 'getCanResize',
    type: '() => boolean',
    description: 'Checks whether this column can start a resize interaction.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-resizing',
    linkText: 'TanStack Table Column Resizing Docs',
  },
  {
    columnInstanceAPI: 'getCanSort',
    type: '() => boolean',
    description: 'Returns whether this column can be sorted.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getFacetedMinMaxValues',
    type: '() => undefined | [number, number]',
    description: 'Computes min/max numeric facet values for this column.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-faceting',
    linkText: 'TanStack Table Column Faceting Docs',
  },
  {
    columnInstanceAPI: 'getFacetedRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      "Computes the row model used to derive this column's facet values. Other column filters are applied, while this column's own filter is excluded.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-faceting',
    linkText: 'TanStack Table Column Faceting Docs',
  },
  {
    columnInstanceAPI: 'getFacetedUniqueValues',
    type: '() => Map<any, number>',
    description:
      'Computes unique facet values and occurrence counts for this column.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-faceting',
    linkText: 'TanStack Table Column Faceting Docs',
  },
  {
    columnInstanceAPI: 'getFilterFn',
    type: '() => MRT_FilterFn<TData>',
    description:
      'Returns the filter function (either user-defined or automatic, depending on configuration) for the columnId specified.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'getFilterIndex',
    type: '() => number',
    description:
      "Returns the index (including `-1`) of the column filter in the table's `state.columnFilters` array.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'getFilterValue',
    type: '() => unknown',
    description:
      "Reads this column's current value from `state.columnFilters`.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'getFirstSortDir',
    type: '() => SortDirection',
    description:
      'Returns the first direction that should be used when sorting this column.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getFlatColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Flattens this column and every descendant column into a single array.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    columnInstanceAPI: 'getGroupedIndex',
    type: '() => number',
    description: "Finds this column's position in the ordered grouping state.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    columnInstanceAPI: 'getIsFiltered',
    type: '() => boolean',
    description:
      'Checks whether this column has an active entry in `state.columnFilters`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'getIsGrouped',
    type: '() => boolean',
    description: 'Checks whether this column id is present in grouping state.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    columnInstanceAPI: 'getIsPinned',
    type: '() => ColumnPinningPosition',
    description:
      "Reads the column's logical pinned position: `'start'`, `'end'`, or `false`.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    columnInstanceAPI: 'getIsResizing',
    type: '() => boolean',
    description: 'Checks whether this column is the active resize target.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-resizing',
    linkText: 'TanStack Table Column Resizing Docs',
  },
  {
    columnInstanceAPI: 'getIsSorted',
    type: '() => false | SortDirection',
    description:
      "Reads this column's current sort direction, or `false` when unsorted.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getIsVisible',
    type: '() => boolean',
    description: 'Checks whether this column is currently visible.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    columnInstanceAPI: 'getLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Collects the terminal leaf columns below this column, or the column itself when it has no children.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    columnInstanceAPI: 'getNextSortingOrder',
    type: '(multi?: boolean) => SortDirection | false',
    description:
      'Returns the next sorting order. Pass `multi` to resolve the order for a multi-sort toggle, where `enableMultiRemove` governs whether the cycle can remove the sort.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getPinnedIndex',
    type: '() => number',
    description: "Finds this column's index within its pinned region.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    columnInstanceAPI: 'getSize',
    type: '() => number',
    description:
      "Resolves the column's current size after state and min/max constraints.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    columnInstanceAPI: 'getSortIndex',
    type: '() => number',
    description: "Finds this column's position in the ordered sorting state.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getSortFn',
    type: '() => MRT_SortFn<TData>',
    description:
      'Returns the resolved sorting function to be used for this column',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getStart',
    type: "(position?: ColumnPinningPosition | 'center') => number",
    description:
      "Measures the offset from the start of this column's region to its start edge. Pass a pinned region to measure within that logical region. The value is the sum of visible leaf column sizes before this column.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    columnInstanceAPI: 'getAfter',
    type: "(position?: ColumnPinningPosition | 'center') => number",
    description:
      "Measures the offset from this column's end edge to the end of its region. Pass a pinned region to measure within that logical region. The value is the sum of visible leaf column sizes after this column.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    columnInstanceAPI: 'getIndex',
    type: "(position?: ColumnPinningPosition | 'center') => number",
    description:
      "Finds this column's zero-based index among visible columns. Pass `'start'`, `'center'`, or `'end'` to measure within that pinned region instead of the full visible leaf order.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-ordering',
    linkText: 'TanStack Table Column Ordering Docs',
  },
  {
    columnInstanceAPI: 'getIsFirstColumn',
    type: "(position?: ColumnPinningPosition | 'center') => boolean",
    description:
      'Checks whether this column is the first visible column. Pass a pinned region to check the first column within that region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-ordering',
    linkText: 'TanStack Table Column Ordering Docs',
  },
  {
    columnInstanceAPI: 'getIsLastColumn',
    type: "(position?: ColumnPinningPosition | 'center') => boolean",
    description:
      'Checks whether this column is the last visible column. Pass a pinned region to check the last column within that region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-ordering',
    linkText: 'TanStack Table Column Ordering Docs',
  },
  {
    columnInstanceAPI: 'getToggleGroupingHandler',
    type: '() => () => void',
    description:
      'Returns a function that toggles the grouping state of the column. This is useful for passing to the `onClick` prop of a button.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    columnInstanceAPI: 'getToggleSortingHandler',
    type: '() => undefined | ((event: unknown) => void)',
    description:
      "Creates a header/control handler that toggles this column's sorting state.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'getToggleVisibilityHandler',
    type: '() => (event: unknown) => void',
    description:
      "Creates a checkbox-style handler that toggles this column's visibility.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    columnInstanceAPI: 'id',
    type: 'string',
    description:
      'The resolved unique identifier for the column resolved in this priority: - A manual `id` property from the column def - The accessor key from the column def - The header string from the column def',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    columnInstanceAPI: 'parent',
    type: 'MRT_Column<TData>',
    description:
      'The parent column for this column. Will be undefined if this is a root column.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    columnInstanceAPI: 'pin',
    type: '(position: ColumnPinningPosition) => void',
    description:
      "Pins this column's leaf columns to logical start or end, or unpins them when `false` is passed.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    columnInstanceAPI: 'resetSize',
    type: '() => void',
    description: 'Resets the column to its initial size.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    columnInstanceAPI: 'setFilterValue',
    type: '(updater: Updater<any>) => void',
    description:
      "Adds, updates, or removes this column's filter value. Updater functions receive the previous filter value. Values that satisfy the filter function's `autoRemove` rule are removed from filter state.",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    columnInstanceAPI: 'toggleGrouping',
    type: '() => void',
    description: 'Toggles the grouping state of the column.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    columnInstanceAPI: 'toggleSorting',
    type: '(desc?: boolean, isMulti?: boolean) => void',
    description:
      "Toggles this column's sorting state. If `desc` is provided, it will force the sort direction to that value. If `isMulti` is provided, it will additively multi-sort the column (or toggle it if it is already sorted).",
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    columnInstanceAPI: 'toggleVisibility',
    type: '(value?: boolean) => void',
    description: 'Toggles the visibility of the column.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
];

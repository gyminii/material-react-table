import { type MRT_TableInstance } from 'material-react-table';

export interface TableInstanceAPI {
  tableInstanceAPI: keyof MRT_TableInstance<TableInstanceAPI>;
  link: string;
  linkText: string;
  description: string;
  type: string;
}

export const tableInstanceAPIs: TableInstanceAPI[] = [
  {
    tableInstanceAPI: 'getAllColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      "Normalizes `options.columns` into the table's nested column hierarchy.",
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    tableInstanceAPI: 'getAllFlatColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Flattens the nested column hierarchy, including parent/group columns.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    tableInstanceAPI: 'getAllLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Collects all terminal leaf columns, excluding parent/group columns.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    tableInstanceAPI: 'getBottomRows',
    type: '() => MRT_Row<TData>[]',
    description: 'Gets rows pinned to the bottom region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCanNextPage',
    type: '() => boolean',
    description: 'Checks whether the current page index can move forward.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getCanPreviousPage',
    type: '() => boolean',
    description: 'Checks whether the current page index can move backward.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getCanSomeRowsExpand',
    type: '() => boolean',
    description: 'Checks whether at least one row can be expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getCenterFlatHeaders',
    type: '() => MRT_Header<TData>[]',
    description:
      'Builds flat center-region headers for columns that are not pinned, including parent headers.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCenterFooterGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description:
      'Builds footer groups for the center region of unpinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCenterHeaderGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description:
      'Builds header groups for the center region of unpinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCenterLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description: 'Gets leaf columns that are not pinned start or end.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCenterLeafHeaders',
    type: '() => MRT_Header<TData>[]',
    description:
      'Builds center-region leaf headers for columns that are not pinned.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCenterRows',
    type: '() => MRT_Row<TData>[]',
    description: 'Gets rows that are not pinned to the top or bottom region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    tableInstanceAPI: 'getCenterTotalSize',
    type: '() => number',
    description:
      'Sums the current sizes of visible center-region leaf columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    tableInstanceAPI: 'getCenterVisibleLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description: 'Lists visible leaf columns in the unpinned center region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getColumn',
    type: '(columnId: string) => MRT_Column<TData>',
    description: 'Returns a single column by its ID.',
    link: 'https://tanstack.com/table/v9/docs/guide/columns',
    linkText: 'TanStack Table Columns Docs',
  },
  {
    tableInstanceAPI: 'getCoreRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      'Returns the core row model before any processing has been applied.',
    link: 'https://tanstack.com/table/v9/docs/guide/row-models',
    linkText: 'TanStack Table Row Models Docs',
  },
  {
    tableInstanceAPI: 'getExpandedDepth',
    type: '() => number',
    description: 'Computes the deepest expanded row id depth.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getExpandedRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      'Resolves the row model after expanded rows have been flattened into view.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getFilteredRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      'Resolves the row model after column and global filters have been applied.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    tableInstanceAPI: 'getFilteredSelectedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Builds a selected-row model from rows after filtering.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getFlatHeaders',
    type: '() => MRT_Header<TData>[]',
    description:
      'Flattens every header from every header group, including parent and placeholder headers.',
    link: 'https://tanstack.com/table/v9/docs/guide/headers',
    linkText: 'TanStack Table Headers Docs',
  },
  {
    tableInstanceAPI: 'getFooterGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description:
      'Builds footer groups by reversing the current header group order.',
    link: 'https://tanstack.com/table/v9/docs/guide/headers',
    linkText: 'TanStack Table Headers Docs',
  },
  {
    tableInstanceAPI: 'getGlobalAutoFilterFn',
    type: '() => MRT_FilterFn<TData> | undefined',
    description:
      'Currently, this function returns the built-in `includesString` filter function. In future releases, it may return more dynamic filter functions based on the nature of the data provided.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/global-filtering',
    linkText: 'TanStack Table Global Filtering Docs',
  },
  {
    tableInstanceAPI: 'getGlobalFacetedMinMaxValues',
    type: '() => undefined | [number, number]',
    description: 'Returns the min and max values for the global filter.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-faceting',
    linkText: 'TanStack Table Column Faceting Docs',
  },
  {
    tableInstanceAPI: 'getGlobalFacetedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Computes the row model used to derive global facet values.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-faceting',
    linkText: 'TanStack Table Column Faceting Docs',
  },
  {
    tableInstanceAPI: 'getGlobalFacetedUniqueValues',
    type: '() => Map<any, number>',
    description: 'Returns the faceted unique values for the global filter.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-faceting',
    linkText: 'TanStack Table Column Faceting Docs',
  },
  {
    tableInstanceAPI: 'getGlobalFilterFn',
    type: '() => MRT_FilterFn<TData> | undefined',
    description:
      'Returns the filter function (either user-defined or automatic, depending on configuration) for the global filter.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/global-filtering',
    linkText: 'TanStack Table Global Filtering Docs',
  },
  {
    tableInstanceAPI: 'getGroupedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Resolves the row model after grouping has been applied.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    tableInstanceAPI: 'getGroupedSelectedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Builds a selected-row model from rows after grouping.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getHeaderGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description:
      'Builds the visible header groups for the current column tree, visibility, and pinning state.',
    link: 'https://tanstack.com/table/v9/docs/guide/headers',
    linkText: 'TanStack Table Headers Docs',
  },
  {
    tableInstanceAPI: 'getIsAllColumnsVisible',
    type: '() => boolean',
    description: 'Checks whether every leaf column is currently visible.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'getIsAllPageRowsSelected',
    type: '() => boolean',
    description:
      'Checks whether every selectable row on the current page is selected. Sub-rows whose ancestors block sub-row selection are ignored.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getIsAllRowsExpanded',
    type: '() => boolean',
    description:
      'Checks whether all rows in the current row model are expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getIsAllRowsSelected',
    type: '() => boolean',
    description:
      'Checks whether every selectable filtered row is selected. Sub-rows whose ancestors block sub-row selection are ignored.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getIsSomeColumnsPinned',
    type: '(position?: ColumnPinningPosition) => boolean',
    description:
      'Checks whether any columns are pinned, optionally limited to one side.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getIsSomeColumnsVisible',
    type: '() => boolean',
    description:
      'Checks whether at least one leaf column is currently visible.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'getIsSomePageRowsSelected',
    type: '() => boolean',
    description:
      'Checks whether at least one selectable row on the current page is selected.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getIsSomeRowsExpanded',
    type: '() => boolean',
    description: 'Checks whether any row is currently expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getIsSomeRowsPinned',
    type: '(position?: RowPinningPosition) => boolean',
    description:
      'Checks whether any rows are pinned, optionally limited to one region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    tableInstanceAPI: 'getIsSomeRowsSelected',
    type: '() => boolean',
    description: 'Checks whether at least one row id is selected.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getLeafHeaders',
    type: '() => MRT_Header<TData>[]',
    description: 'Collects only leaf headers, excluding parent/group headers.',
    link: 'https://tanstack.com/table/v9/docs/guide/headers',
    linkText: 'TanStack Table Headers Docs',
  },
  {
    tableInstanceAPI: 'getStartFlatHeaders',
    type: '() => MRT_Header<TData>[]',
    description:
      'Builds flat logical start-region headers for pinned columns, including parent headers.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getStartFooterGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description: 'Builds footer groups for logical start-pinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getStartHeaderGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description: 'Builds header groups for logical start-pinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getStartLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Gets leaf columns pinned to the logical start region in pinning-state order.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getStartLeafHeaders',
    type: '() => MRT_Header<TData>[]',
    description: 'Builds leaf headers for logical start-pinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getStartTotalSize',
    type: '() => number',
    description:
      'Sums the current sizes of visible logical start-pinned leaf columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    tableInstanceAPI: 'getStartVisibleLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Lists visible leaf columns in the logical start pinned region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getPageCount',
    type: '() => number',
    description:
      'Resolves the current page count from `options.pageCount` or row count and page size.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getRowCount',
    type: '() => number',
    description:
      'Resolves the row count used for pagination math. `options.rowCount` wins; otherwise the pre-paginated row model is counted.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getPageOptions',
    type: '() => number[]',
    description: 'Builds zero-based page indexes for the current page count.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getPaginatedRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      'Resolves the row model after pagination has sliced the current page.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getPreExpandedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Reads the row model immediately before expansion.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getPreFilteredRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Reads the row model immediately before filtering.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    tableInstanceAPI: 'getPreGroupedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Reads the row model immediately before grouping.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    tableInstanceAPI: 'getPrePaginatedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Reads the row model immediately before pagination.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'getPreSelectedRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      'Returns the core row model of all rows before row selection has been applied.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getPreSortedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Reads the row model immediately before sorting.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    tableInstanceAPI: 'getEndFlatHeaders',
    type: '() => MRT_Header<TData>[]',
    description:
      'Builds flat logical end-region headers for pinned columns, including parent headers.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getEndFooterGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description: 'Builds footer groups for logical end-pinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getEndHeaderGroups',
    type: '() => MRT_HeaderGroup<TData>[]',
    description: 'Builds header groups for logical end-pinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getEndLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Gets leaf columns pinned to the logical end region in pinning-state order.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getEndLeafHeaders',
    type: '() => MRT_Header<TData>[]',
    description: 'Builds leaf headers for logical end-pinned columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getEndTotalSize',
    type: '() => number',
    description:
      'Sums the current sizes of visible logical end-pinned leaf columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    tableInstanceAPI: 'getEndVisibleLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description: 'Lists visible leaf columns in the logical end pinned region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'getRow',
    type: '(id: string, searchAll?: boolean) => MRT_Row<TData>',
    description: 'Returns the row with the given ID.',
    link: 'https://tanstack.com/table/v9/docs/guide/rows',
    linkText: 'TanStack Table Rows Docs',
  },
  {
    tableInstanceAPI: 'getRowModel',
    type: '() => MRT_RowModel<TData>',
    description:
      'Returns the final model after all processing from other used features has been applied. This is the row model that is most commonly used for rendering.',
    link: 'https://tanstack.com/table/v9/docs/guide/row-models',
    linkText: 'TanStack Table Row Models Docs',
  },
  {
    tableInstanceAPI: 'getSelectedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Builds a selected-row model from the core row model.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getSortedRowModel',
    type: '() => MRT_RowModel<TData>',
    description: 'Resolves the row model after sorting has been applied.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    tableInstanceAPI: 'getState',
    type: '() => MRT_TableState<TData>',
    description:
      'Returns the full current table state, including the MRT-only slices such as density, editingRow, and isFullScreen. Inside render code, `table.state` is the reactive equivalent.',
    link: '/docs/guides/state-management',
    linkText: 'MRT State Management Docs',
  },
  {
    tableInstanceAPI: 'getToggleAllColumnsVisibilityHandler',
    type: '() => (event: unknown) => void',
    description:
      'Creates a checkbox-style handler that shows or hides all columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'getToggleAllPageRowsSelectedHandler',
    type: '() => (event: unknown) => void',
    description:
      'Creates a checkbox-style handler that toggles all current-page rows.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getToggleAllRowsExpandedHandler',
    type: '() => (event: unknown) => void',
    description: 'Creates a handler that toggles all rows expanded.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'getToggleAllRowsSelectedHandler',
    type: '() => (event: unknown) => void',
    description:
      'Creates a checkbox-style handler that toggles all selectable rows.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'getTopRows',
    type: '() => MRT_Row<TData>[]',
    description: 'Gets rows pinned to the top region.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    tableInstanceAPI: 'getTotalSize',
    type: '() => number',
    description: 'Sums the current sizes of all visible leaf columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    tableInstanceAPI: 'getVisibleFlatColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Lists visible columns in flat table order, including parent columns that have visible descendants.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'getVisibleLeafColumns',
    type: '() => MRT_Column<TData>[]',
    description:
      'Lists visible leaf columns in the order used for row cells and headers.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'initialState',
    type: 'MRT_TableState<TData>',
    description:
      'The state the table was created with, after MRT merged its defaults into your `initialState` option. `table.reset()` returns the table to it.',
    link: '/docs/guides/state-management',
    linkText: 'MRT State Management Docs',
  },
  {
    tableInstanceAPI: 'nextPage',
    type: '() => void',
    description: 'Increments the page index by one, if possible.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'options',
    type: 'MRT_StatefulTableOptions<TData>',
    description:
      'The resolved table options after MRT applied its defaults, with the current state merged in.',
    link: '/docs/api/table-options',
    linkText: 'MRT Table Options Docs',
  },
  {
    tableInstanceAPI: 'previousPage',
    type: '() => void',
    description: 'Decrements the page index by one, if possible.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'refs',
    type: '{ actionCellRef: RefObject<HTMLTableCellElement | null>; bottomToolbarRef: RefObject<HTMLDivElement | null>; editInputRefs: RefObject<null | Record<string, HTMLInputElement>>; filterInputRefs: RefObject<null | Record<string, HTMLInputElement>>; lastSelectedRowId: RefObject<null | string>; searchInputRef: RefObject<HTMLInputElement | null>; tableContainerRef: RefObject<HTMLDivElement | null>; tableFooterRef: RefObject<HTMLTableSectionElement | null>; tableHeadCellRefs: RefObject<null | Record<string, HTMLTableCellElement>>; tableHeadRef: RefObject<HTMLTableSectionElement | null>; tablePaperRef: RefObject<HTMLDivElement | null>; topToolbarRef: RefObject<HTMLDivElement | null>; }',
    description:
      'React refs to the DOM elements MRT renders: the paper, container, head, footer, and toolbars, plus the search, filter, and edit inputs, the action cell, the head cells, and the id of the last selected row.',
    link: '',
    linkText: '',
  },
  {
    tableInstanceAPI: 'reset',
    type: '() => void',
    description:
      "Resets the table's internal base atoms to `table.initialState`. Prefer feature-specific reset APIs, such as `resetPagination`, when a state slice may be owned by an external atom or needs that feature's blank/default reset behavior. After resetting internal atoms, this also invokes feature reset hooks for mutable, transient table-instance data.",
    link: 'https://tanstack.com/table/v9/docs/guide/tables',
    linkText: 'TanStack Table Instance Docs',
  },
  {
    tableInstanceAPI: 'resetColumnFilters',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `columnFilters` to `initialState.columnFilters`. Pass `true` to ignore initial state and reset to `[]`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    tableInstanceAPI: 'resetColumnOrder',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `columnOrder` to `initialState.columnOrder`. Pass `true` to ignore initial state and reset to `[]`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-ordering',
    linkText: 'TanStack Table Column Ordering Docs',
  },
  {
    tableInstanceAPI: 'resetColumnPinning',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `columnPinning` to `initialState.columnPinning`. Pass `true` to ignore initial state and reset to empty start/end arrays.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'resetColumnSizing',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets column sizing to `initialState.columnSizing`. Pass `true` to reset to the feature default of `{}`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    tableInstanceAPI: 'resetColumnVisibility',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `columnVisibility` to `initialState.columnVisibility`. Pass `true` to ignore initial state and reset to `{}`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'resetExpanded',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `expanded` to `initialState.expanded`. Pass `true` to ignore initial state and reset to `{}`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'resetGlobalFilter',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `globalFilter` to `initialState.globalFilter`. Pass `true` to ignore initial state and reset to `undefined`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/global-filtering',
    linkText: 'TanStack Table Global Filtering Docs',
  },
  {
    tableInstanceAPI: 'resetGrouping',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `grouping` to `initialState.grouping`. Pass `true` to ignore initial state and reset to `[]`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    tableInstanceAPI: 'resetHeaderSizeInfo',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `columnResizing` to `initialState.columnResizing`. Pass `true` to ignore initial state and reset to the no-drag default state.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-resizing',
    linkText: 'TanStack Table Column Resizing Docs',
  },
  {
    tableInstanceAPI: 'resetPageIndex',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `pagination.pageIndex` to initial state, or to `0` when `defaultState` is `true`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'resetPageSize',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `pagination.pageSize` to initial state, or to `10` when `defaultState` is `true`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'resetPagination',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `pagination` to `initialState.pagination`. Pass `true` to ignore initial state and reset to `{ pageIndex: 0, pageSize: 10 }`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'resetRowPinning',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `rowPinning` to `initialState.rowPinning`. Pass `true` to ignore initial state and reset to empty top/bottom arrays.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    tableInstanceAPI: 'resetRowSelection',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `rowSelection` to `initialState.rowSelection`. Pass `true` to ignore initial state and reset to `{}`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'resetSorting',
    type: '(defaultState?: boolean) => void',
    description:
      'Resets `sorting` to `initialState.sorting`. Pass `true` to ignore initial state and reset to `[]`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    tableInstanceAPI: 'setColumnFilterFns',
    type: 'Dispatch<SetStateAction<MRT_ColumnFilterFnsState>>',
    description:
      'Sets the `columnFilterFns` state that maps each column id to its active filter mode.',
    link: '/docs/guides/column-filtering#customize-filter-modes',
    linkText: 'MRT Filter Modes Docs',
  },
  {
    tableInstanceAPI: 'setColumnFilters',
    type: '(updater: Updater<ColumnFiltersState>) => void',
    description:
      'Updates column filter state with a next array or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-filtering',
    linkText: 'TanStack Table Column Filtering Docs',
  },
  {
    tableInstanceAPI: 'setColumnOrder',
    type: '(updater: Updater<ColumnOrderState>) => void',
    description:
      'Updates column order state with a next ordered id array or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-ordering',
    linkText: 'TanStack Table Column Ordering Docs',
  },
  {
    tableInstanceAPI: 'setColumnPinning',
    type: '(updater: Updater<ColumnPinningState>) => void',
    description:
      'Updates column pinning state with a next state or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-pinning',
    linkText: 'TanStack Table Column Pinning Docs',
  },
  {
    tableInstanceAPI: 'setColumnSizing',
    type: '(updater: Updater<ColumnSizingState>) => void',
    description:
      'Updates committed column sizing state with a next map or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-sizing',
    linkText: 'TanStack Table Column Sizing Docs',
  },
  {
    tableInstanceAPI: 'setColumnResizing',
    type: '(updater: Updater<columnResizingState>) => void',
    description:
      'Updates transient resize interaction state with a next state or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-resizing',
    linkText: 'TanStack Table Column Resizing Docs',
  },
  {
    tableInstanceAPI: 'setColumnVisibility',
    type: '(updater: Updater<ColumnVisibilityState>) => void',
    description:
      'Updates column visibility state with a next map or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'setCreatingRow',
    type: 'Dispatch<SetStateAction<MRT_Row<TData> | null | true>>',
    description:
      'Sets the `creatingRow` state. Pass `true` to insert a blank row, an `MRT_Row` to start from existing values, or `null` to cancel.',
    link: '/docs/guides/editing',
    linkText: 'MRT Editing Docs',
  },
  {
    tableInstanceAPI: 'setDensity',
    type: 'Dispatch<SetStateAction<MRT_DensityState>>',
    description:
      "Sets the `density` state to `'comfortable'`, `'compact'`, or `'spacious'`.",
    link: '/docs/guides/density-toggle',
    linkText: 'MRT Density Toggle Docs',
  },
  {
    tableInstanceAPI: 'setDraggingColumn',
    type: 'Dispatch<SetStateAction<MRT_Column<TData> | null>>',
    description: 'Sets the `draggingColumn` state while a column is dragged.',
    link: '/docs/guides/column-ordering-dnd',
    linkText: 'MRT Column Ordering Docs',
  },
  {
    tableInstanceAPI: 'setDraggingRow',
    type: 'Dispatch<SetStateAction<MRT_Row<TData> | null>>',
    description: 'Sets the `draggingRow` state while a row is dragged.',
    link: '/docs/guides/row-ordering-dnd',
    linkText: 'MRT Row Ordering Docs',
  },
  {
    tableInstanceAPI: 'setEditingCell',
    type: 'Dispatch<SetStateAction<MRT_Cell<TData> | null>>',
    description:
      "Sets the `editingCell` state to open one cell for editing in the `'cell'` edit display mode, or `null` to close it.",
    link: '/docs/guides/editing',
    linkText: 'MRT Editing Docs',
  },
  {
    tableInstanceAPI: 'setEditingRow',
    type: 'Dispatch<SetStateAction<MRT_Row<TData> | null>>',
    description:
      "Sets the `editingRow` state to open one row for editing in the `'modal'` or `'row'` edit display modes, or `null` to close it.",
    link: '/docs/guides/editing',
    linkText: 'MRT Editing Docs',
  },
  {
    tableInstanceAPI: 'setExpanded',
    type: '(updater: Updater<ExpandedState>) => void',
    description:
      'Updates expanded state with `true`, a row-id map, or an updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'setGlobalFilter',
    type: '(updater: Updater<any>) => void',
    description:
      'Updates global filter state with a next value or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/global-filtering',
    linkText: 'TanStack Table Global Filtering Docs',
  },
  {
    tableInstanceAPI: 'setGlobalFilterFn',
    type: 'Dispatch<SetStateAction<MRT_FilterOption>>',
    description:
      'Sets the `globalFilterFn` state that selects the active global filter mode.',
    link: '/docs/guides/global-filtering',
    linkText: 'MRT Global Filtering Docs',
  },
  {
    tableInstanceAPI: 'setGrouping',
    type: '(updater: Updater<GroupingState>) => void',
    description:
      'Updates grouping state with a next ordered id array or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/grouping',
    linkText: 'TanStack Table Grouping Docs',
  },
  {
    tableInstanceAPI: 'setHoveredColumn',
    type: 'Dispatch<SetStateAction<null | Partial<MRT_Column<TData>>>>',
    description:
      'Sets the `hoveredColumn` state, the drop target while a column is dragged.',
    link: '/docs/guides/column-ordering-dnd',
    linkText: 'MRT Column Ordering Docs',
  },
  {
    tableInstanceAPI: 'setHoveredRow',
    type: 'Dispatch<SetStateAction<null | Partial<MRT_Row<TData>>>>',
    description:
      'Sets the `hoveredRow` state, the drop target while a row is dragged.',
    link: '/docs/guides/row-ordering-dnd',
    linkText: 'MRT Row Ordering Docs',
  },
  {
    tableInstanceAPI: 'setIsFullScreen',
    type: 'Dispatch<SetStateAction<boolean>>',
    description: 'Sets the `isFullScreen` state that toggles full screen mode.',
    link: '/docs/guides/full-screen-toggle',
    linkText: 'MRT Full Screen Toggle Docs',
  },
  {
    tableInstanceAPI: 'setOptions',
    type: '(newOptions: Updater<MRT_TableOptions<TData>>) => void',
    description:
      'Updates the table options by applying a value or updater to the current resolved options and then merging them through `options.mergeOptions`.',
    link: 'https://tanstack.com/table/v9/docs/guide/tables',
    linkText: 'TanStack Table Instance Docs',
  },
  {
    tableInstanceAPI: 'lastPage',
    type: '() => void',
    description:
      'Sets the page index to the last known page. Does nothing when the page count is unknown, empty, or non-finite.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'firstPage',
    type: '() => void',
    description: 'Sets the page index to `0`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'setPageIndex',
    type: '(updater: Updater<number>) => void',
    description: 'Updates `pagination.pageIndex` using a value or updater.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'setPageSize',
    type: '(updater: Updater<number>) => void',
    description: 'Updates `pagination.pageSize` using a value or updater.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'setPagination',
    type: '(updater: Updater<PaginationState>) => void',
    description:
      'Updates pagination state with a next state or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/pagination',
    linkText: 'TanStack Table Pagination Docs',
  },
  {
    tableInstanceAPI: 'setRowPinning',
    type: '(updater: Updater<RowPinningState>) => void',
    description:
      'Updates row pinning state with a next state or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-pinning',
    linkText: 'TanStack Table Row Pinning Docs',
  },
  {
    tableInstanceAPI: 'setRowSelection',
    type: '(updater: Updater<RowSelectionState>) => void',
    description:
      'Updates row selection state with a next map or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'setShowAlertBanner',
    type: 'Dispatch<SetStateAction<boolean>>',
    description:
      'Sets the `showAlertBanner` state that shows or hides the alert banner in the top toolbar.',
    link: '/docs/guides/toolbar-customization',
    linkText: 'MRT Toolbar Customization Docs',
  },
  {
    tableInstanceAPI: 'setShowColumnFilters',
    type: 'Dispatch<SetStateAction<boolean>>',
    description:
      'Sets the `showColumnFilters` state that shows or hides the column filter inputs.',
    link: '/docs/guides/column-filtering',
    linkText: 'MRT Column Filtering Docs',
  },
  {
    tableInstanceAPI: 'setShowGlobalFilter',
    type: 'Dispatch<SetStateAction<boolean>>',
    description:
      'Sets the `showGlobalFilter` state that shows or hides the global search input.',
    link: '/docs/guides/global-filtering',
    linkText: 'MRT Global Filtering Docs',
  },
  {
    tableInstanceAPI: 'setShowToolbarDropZone',
    type: 'Dispatch<SetStateAction<boolean>>',
    description:
      'Sets the `showToolbarDropZone` state that shows the grouping drop zone in the top toolbar.',
    link: '/docs/guides/column-grouping',
    linkText: 'MRT Column Grouping Docs',
  },
  {
    tableInstanceAPI: 'setSorting',
    type: '(updater: Updater<SortingState>) => void',
    description:
      'Updates sorting state with a next ordered array or updater function.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/sorting',
    linkText: 'TanStack Table Sorting Docs',
  },
  {
    tableInstanceAPI: 'toggleAllColumnsVisible',
    type: '(value?: boolean) => void',
    description: 'Toggles the visibility of all columns.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/column-visibility',
    linkText: 'TanStack Table Column Visibility Docs',
  },
  {
    tableInstanceAPI: 'toggleAllPageRowsSelected',
    type: '(value?: boolean, opts?: { deselectAll?: boolean; }) => void',
    description: 'Selects/deselects all rows on the current page.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
  {
    tableInstanceAPI: 'toggleAllRowsExpanded',
    type: '(expanded?: boolean) => void',
    description: 'Toggles the expanded state for all rows.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/expanding',
    linkText: 'TanStack Table Expanding Docs',
  },
  {
    tableInstanceAPI: 'toggleAllRowsSelected',
    type: '(value?: boolean, opts?: { deselectAll?: boolean; }) => void',
    description:
      'Selects/deselects all rows in the table. Deselecting keeps rows that cannot be selected in the selection map unless `opts.deselectAll` is `true`.',
    link: 'https://tanstack.com/table/v9/docs/framework/react/guide/row-selection',
    linkText: 'TanStack Table Row Selection Docs',
  },
];

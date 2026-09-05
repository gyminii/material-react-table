import { useMemo, useRef } from 'react';
import { useTable } from '@tanstack/react-table';
import { getMRT_RowActionsColumnDef } from './display-columns/getMRT_RowActionsColumnDef';
import { getMRT_RowDragColumnDef } from './display-columns/getMRT_RowDragColumnDef';
import { getMRT_RowExpandColumnDef } from './display-columns/getMRT_RowExpandColumnDef';
import { getMRT_RowNumbersColumnDef } from './display-columns/getMRT_RowNumbersColumnDef';
import { getMRT_RowPinningColumnDef } from './display-columns/getMRT_RowPinningColumnDef';
import { getMRT_RowSelectColumnDef } from './display-columns/getMRT_RowSelectColumnDef';
import { getMRT_RowSpacerColumnDef } from './display-columns/getMRT_RowSpacerColumnDef';
import { useMRT_Effects } from './useMRT_Effects';
import {
  mrtFeatures,
  mrtFeaturesWithoutFacetedValues,
} from '../features/mrtFeatures';
import {
  type MRT_ColumnDef,
  type MRT_ColumnResizingState,
  type MRT_DefinedTableOptions,
  type MRT_RowData,
  type MRT_StatefulTableOptions,
  type MRT_TableInstance,
  type MRT_TableState,
} from '../types';
import {
  getAllLeafColumnDefs,
  getColumnId,
  getDefaultColumnFilterFn,
  prepareColumns,
} from '../utils/column.utils';
import {
  getDefaultColumnOrderIds,
  showRowActionsColumn,
  showRowDragColumn,
  showRowExpandColumn,
  showRowNumbersColumn,
  showRowPinningColumn,
  showRowSelectionColumn,
  showRowSpacerColumn,
} from '../utils/displayColumn.utils';

/**
 * The MRT hook that wraps the TanStack useTable hook and adds additional functionality
 * @param definedTableOptions - table options with proper defaults set
 * @returns the MRT table instance
 */
export const useMRT_TableInstance = <TData extends MRT_RowData>(
  definedTableOptions: MRT_DefinedTableOptions<TData>,
): MRT_TableInstance<TData> => {
  const tableRef = useRef<MRT_TableInstance<TData> | null>(null);

  //transform initial state with proper column order and filter fns
  const initialState: Partial<MRT_TableState<TData>> = useMemo(() => {
    const initState = definedTableOptions.initialState ?? {};
    initState.columnOrder =
      initState.columnOrder ??
      getDefaultColumnOrderIds({
        ...definedTableOptions,
        state: {
          ...definedTableOptions.initialState,
          ...definedTableOptions.state,
        },
      } as MRT_StatefulTableOptions<TData>);
    initState.columnFilterFns = Object.assign(
      {},
      ...getAllLeafColumnDefs(
        definedTableOptions.columns as MRT_ColumnDef<TData>[],
      ).map((col) => ({
        [getColumnId(col)]:
          col.filterFn instanceof Function
            ? (col.filterFn.name ?? 'custom')
            : (col.filterFn ??
              initState.columnFilterFns?.[getColumnId(col)] ??
              getDefaultColumnFilterFn(col)),
      })),
    );
    initState.globalFilterFn = definedTableOptions.globalFilterFn ?? 'fuzzy';
    return initState;
  }, []);

  definedTableOptions.initialState = initialState;

  //MRT-owned state lives in the table store; the previous render's state feeds
  //the option transforms below, falling back to the initial state on first render
  const controlledState = definedTableOptions.state;
  definedTableOptions.state = {
    columnResizing: {} as MRT_ColumnResizingState,
    creatingRow: null,
    draggingColumn: null,
    draggingRow: null,
    grouping: [],
    isLoading: false,
    pagination: { pageIndex: 0, pageSize: 10 },
    showSkeletons: false,
    ...initialState,
    ...tableRef.current?.state,
    ...controlledState,
  };

  //The table options now include all state needed to help determine column visibility and order logic
  const statefulTableOptions =
    definedTableOptions as MRT_StatefulTableOptions<TData>;

  //don't recompute columnDefs while resizing column or dragging column/row
  const columnDefsRef = useRef<MRT_ColumnDef<TData>[]>([]);
  statefulTableOptions.columns =
    statefulTableOptions.state.columnResizing.isResizingColumn ||
    statefulTableOptions.state.draggingColumn ||
    statefulTableOptions.state.draggingRow
      ? columnDefsRef.current
      : prepareColumns({
          columnDefs: [
            ...([
              showRowPinningColumn(statefulTableOptions) &&
                getMRT_RowPinningColumnDef(statefulTableOptions),
              showRowDragColumn(statefulTableOptions) &&
                getMRT_RowDragColumnDef(statefulTableOptions),
              showRowActionsColumn(statefulTableOptions) &&
                getMRT_RowActionsColumnDef(statefulTableOptions),
              showRowExpandColumn(statefulTableOptions) &&
                getMRT_RowExpandColumnDef(statefulTableOptions),
              showRowSelectionColumn(statefulTableOptions) &&
                getMRT_RowSelectColumnDef(statefulTableOptions),
              showRowNumbersColumn(statefulTableOptions) &&
                getMRT_RowNumbersColumnDef(statefulTableOptions),
            ].filter(Boolean) as MRT_ColumnDef<TData>[]),
            ...statefulTableOptions.columns,
            ...([
              showRowSpacerColumn(statefulTableOptions) &&
                getMRT_RowSpacerColumnDef(statefulTableOptions),
            ].filter(Boolean) as MRT_ColumnDef<TData>[]),
          ],
          tableOptions: statefulTableOptions,
        });
  columnDefsRef.current = statefulTableOptions.columns;

  //if loading, generate blank rows to show skeleton loaders
  statefulTableOptions.data = useMemo(
    () =>
      (statefulTableOptions.state.isLoading ||
        statefulTableOptions.state.showSkeletons) &&
      !statefulTableOptions.data.length
        ? [
            ...Array(
              Math.min(statefulTableOptions.state.pagination.pageSize, 20),
            ).fill(null),
          ].map(() =>
            Object.assign(
              {},
              ...getAllLeafColumnDefs(statefulTableOptions.columns).map(
                (col) => ({
                  [getColumnId(col)]: null,
                }),
              ),
            ),
          )
        : statefulTableOptions.data,
    [
      statefulTableOptions.data,
      statefulTableOptions.state.isLoading,
      statefulTableOptions.state.showSkeletons,
    ],
  );

  //only the user's own `state` option controls slices; the merged copy above
  //is for the transforms and must not be passed to the table
  const { state, ...tableOptions } = statefulTableOptions;
  const table = useTable({
    ...tableOptions,
    features: tableOptions.enableFacetedValues
      ? mrtFeatures
      : mrtFeaturesWithoutFacetedValues,
    globalFilterFn: state.globalFilterFn ?? 'fuzzy',
    state: controlledState,
  } as any) as unknown as MRT_TableInstance<TData>;

  tableRef.current = table;

  useMRT_Effects(table);

  return table;
};

import {
  type MRT_ColumnDef,
  MRT_TableContainer,
  useMaterialReactTable,
} from 'material-react-table';

const Code = ({ children }: { children: string }) => (
  <code style={{ whiteSpace: 'pre-wrap' }}>{children}</code>
);

type PeerRow = { peer: string; v3: string; v4: string };

const peerColumns: MRT_ColumnDef<PeerRow>[] = [
  {
    accessorKey: 'peer',
    header: 'Peer',
    Cell: ({ cell }) => <Code>{cell.getValue<string>()}</Code>,
  },
  { accessorKey: 'v3', header: 'V3' },
  { accessorKey: 'v4', header: 'V4' },
];

const peerData: PeerRow[] = [
  { peer: '@mui/material', v3: '>=6', v4: '>=9.0' },
  { peer: '@mui/icons-material', v3: '>=6', v4: '>=9.0' },
  { peer: '@mui/x-date-pickers', v3: '>=7.15', v4: '>=9.0' },
  { peer: 'react, react-dom', v3: '>=18.0', v4: '>=18.0 (unchanged)' },
  {
    peer: '@emotion/react, @emotion/styled',
    v3: '>=11.13',
    v4: '>=11.13 (unchanged)',
  },
];

type RenameRow = { v3: string; v4: string };

const renameColumns: MRT_ColumnDef<RenameRow>[] = [
  {
    accessorKey: 'v3',
    header: 'V3 (TanStack Table V8)',
    Cell: ({ cell }) => <Code>{cell.getValue<string>()}</Code>,
  },
  {
    accessorKey: 'v4',
    header: 'V4 (TanStack Table V9)',
    Cell: ({ cell }) => <Code>{cell.getValue<string>()}</Code>,
  },
];

const renameData: RenameRow[] = [
  {
    v3: 'initialState: { columnPinning: { left: [...], right: [...] } }',
    v4: 'columnPinning: { start: [...], end: [...] }',
  },
  {
    v3: "column.pin('left') / column.pin('right')",
    v4: "column.pin('start') / column.pin('end')",
  },
  {
    v3: "column.getIsPinned() === 'left'",
    v4: "column.getIsPinned() === 'start'",
  },
  {
    v3: 'table.getLeftLeafColumns() and the other getLeft* / getRight* methods',
    v4: 'table.getStartLeafColumns() and getStart* / getEnd*',
  },
  {
    v3: 'row.getLeftVisibleCells() / row.getRightVisibleCells()',
    v4: 'row.getStartVisibleCells() / row.getEndVisibleCells()',
  },
  {
    v3: 'columnSizingInfo state, onColumnSizingInfoChange, table.setColumnSizingInfo()',
    v4: 'columnResizing, onColumnResizingChange, table.setColumnResizing()',
  },
  { v3: 'sortingFn column option', v4: 'sortFn' },
  { v3: 'sortingFns table option', v4: 'sortFns' },
  {
    v3: 'column.getSortingFn() / column.getAutoSortingFn()',
    v4: 'column.getSortFn() / column.getAutoSortFn()',
  },
  {
    v3: 'table.getPrePaginationRowModel() / table.getPaginationRowModel()',
    v4: 'table.getPrePaginatedRowModel() / table.getPaginatedRowModel()',
  },
  { v3: 'column.getAggregationFn()', v4: 'column.getAggregationFns()' },
  {
    v3: 'MRT_SortingFn type',
    v4: 'MRT_SortFn (the old name is kept as a deprecated alias)',
  },
  {
    v3: 'MRT_ColumnSizingInfoState type',
    v4: 'MRT_ColumnResizingState (the old name is kept as a deprecated alias)',
  },
];

const useMigrationTable = <TData extends Record<string, any>>(
  columns: MRT_ColumnDef<TData>[],
  data: TData[],
) =>
  useMaterialReactTable({
    columns,
    data,
    defaultColumn: {
      muiTableHeadCellProps: { sx: { fontSize: '16px' } },
      muiTableBodyCellProps: { sx: { fontSize: '16px' } },
    },
    enableColumnActions: false,
    enableSorting: false,
  });

export const PeerDependencyTable = () => {
  const table = useMigrationTable(peerColumns, peerData);
  return <MRT_TableContainer table={table} />;
};

export const RenameTable = () => {
  const table = useMigrationTable(renameColumns, renameData);
  return <MRT_TableContainer table={table} />;
};

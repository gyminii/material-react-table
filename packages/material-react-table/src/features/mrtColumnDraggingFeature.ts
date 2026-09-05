import {
  assignTableAPIs,
  functionalUpdate,
  makeStateUpdater,
  type OnChangeFn,
  type RowData,
  type TableFeature,
  type TableFeatures,
  type Updater,
} from '@tanstack/react-table';
import { type MRT_Column } from '../types';

export interface MRT_Table_ColumnDragging<TData extends RowData> {
  setDraggingColumn: (updater: Updater<MRT_Column<TData> | null>) => void;
  setHoveredColumn: (
    updater: Updater<null | Partial<MRT_Column<TData>>>,
  ) => void;
}

export interface MRT_TableOptions_ColumnDragging<TData extends RowData> {
  onDraggingColumnChange?: OnChangeFn<MRT_Column<TData> | null>;
  onHoveredColumnChange?: OnChangeFn<null | Partial<MRT_Column<TData>>>;
}

export interface MRT_TableState_ColumnDragging {
  draggingColumn: MRT_Column<any> | null;
  hoveredColumn: null | Partial<MRT_Column<any>>;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtColumnDraggingFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtColumnDraggingFeature: MRT_Table_ColumnDragging<TData>;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtColumnDraggingFeature: MRT_TableOptions_ColumnDragging<TData>;
  }
  interface TableState_FeatureMap {
    mrtColumnDraggingFeature: MRT_TableState_ColumnDragging;
  }
}

export const mrtColumnDraggingFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtColumnDraggingFeature', table, {
      table_setDraggingColumn: {
        fn: (updater: Updater<MRT_Column<any> | null>) =>
          (
            table.options as MRT_TableOptions_ColumnDragging<any>
          ).onDraggingColumnChange?.((old) => functionalUpdate(updater, old)),
      },
      table_setHoveredColumn: {
        fn: (updater: Updater<null | Partial<MRT_Column<any>>>) =>
          (
            table.options as MRT_TableOptions_ColumnDragging<any>
          ).onHoveredColumnChange?.((old) => functionalUpdate(updater, old)),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onDraggingColumnChange: makeStateUpdater(
      'draggingColumn',
      table,
    ) as OnChangeFn<any>,
    onHoveredColumnChange: makeStateUpdater(
      'hoveredColumn',
      table,
    ) as OnChangeFn<any>,
  }),
  getInitialState: (initialState) => ({
    draggingColumn: null,
    hoveredColumn: null,
    ...initialState,
  }),
};

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
import { type MRT_Row } from '../types';

export interface MRT_Table_RowDragging<TData extends RowData> {
  setDraggingRow: (updater: Updater<MRT_Row<TData> | null>) => void;
  setHoveredRow: (updater: Updater<null | Partial<MRT_Row<TData>>>) => void;
}

export interface MRT_TableOptions_RowDragging<TData extends RowData> {
  onDraggingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  onHoveredRowChange?: OnChangeFn<null | Partial<MRT_Row<TData>>>;
}

export interface MRT_TableState_RowDragging {
  draggingRow: MRT_Row<any> | null;
  hoveredRow: null | Partial<MRT_Row<any>>;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtRowDraggingFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtRowDraggingFeature: MRT_Table_RowDragging<TData>;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtRowDraggingFeature: MRT_TableOptions_RowDragging<TData>;
  }
  interface TableState_FeatureMap {
    mrtRowDraggingFeature: MRT_TableState_RowDragging;
  }
}

export const mrtRowDraggingFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtRowDraggingFeature', table, {
      table_setDraggingRow: {
        fn: (updater: Updater<MRT_Row<any> | null>) =>
          (
            table.options as MRT_TableOptions_RowDragging<any>
          ).onDraggingRowChange?.((old) => functionalUpdate(updater, old)),
      },
      table_setHoveredRow: {
        fn: (updater: Updater<null | Partial<MRT_Row<any>>>) =>
          (
            table.options as MRT_TableOptions_RowDragging<any>
          ).onHoveredRowChange?.((old) => functionalUpdate(updater, old)),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onDraggingRowChange: makeStateUpdater(
      'draggingRow',
      table,
    ) as OnChangeFn<any>,
    onHoveredRowChange: makeStateUpdater(
      'hoveredRow',
      table,
    ) as OnChangeFn<any>,
  }),
  getInitialState: (initialState) => ({
    draggingRow: null,
    hoveredRow: null,
    ...initialState,
  }),
};

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
import { type MRT_Cell } from '../types';

export interface MRT_Table_CellActions<TData extends RowData> {
  setActionCell: (updater: Updater<MRT_Cell<TData> | null>) => void;
}

export interface MRT_TableOptions_CellActions<TData extends RowData> {
  onActionCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
}

export interface MRT_TableState_CellActions {
  actionCell: MRT_Cell<any> | null;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtCellActionsFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtCellActionsFeature: MRT_Table_CellActions<TData>;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtCellActionsFeature: MRT_TableOptions_CellActions<TData>;
  }
  interface TableState_FeatureMap {
    mrtCellActionsFeature: MRT_TableState_CellActions;
  }
}

export const mrtCellActionsFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtCellActionsFeature', table, {
      table_setActionCell: {
        fn: (updater: Updater<MRT_Cell<any> | null>) =>
          (
            table.options as MRT_TableOptions_CellActions<any>
          ).onActionCellChange?.((old) => functionalUpdate(updater, old)),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onActionCellChange: makeStateUpdater(
      'actionCell',
      table,
    ) as OnChangeFn<any>,
  }),
  getInitialState: (initialState) => ({
    actionCell: null,
    ...initialState,
  }),
};

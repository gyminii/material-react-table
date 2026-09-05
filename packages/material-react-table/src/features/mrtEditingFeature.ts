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
import { type MRT_Cell, type MRT_Row } from '../types';
import { createRow } from '../utils/tanstack.helpers';

export interface MRT_Table_Editing<TData extends RowData> {
  setCreatingRow: (updater: Updater<MRT_Row<TData> | null | true>) => void;
  setEditingCell: (updater: Updater<MRT_Cell<TData> | null>) => void;
  setEditingRow: (updater: Updater<MRT_Row<TData> | null>) => void;
}

export interface MRT_TableOptions_Editing<TData extends RowData> {
  onCreatingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  onEditingCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
  onEditingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
}

export interface MRT_TableState_Editing {
  creatingRow: MRT_Row<any> | null;
  editingCell: MRT_Cell<any> | null;
  editingRow: MRT_Row<any> | null;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtEditingFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtEditingFeature: MRT_Table_Editing<TData>;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtEditingFeature: MRT_TableOptions_Editing<TData>;
  }
  interface TableState_FeatureMap {
    mrtEditingFeature: MRT_TableState_Editing;
  }
}

export const mrtEditingFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtEditingFeature', table, {
      table_setCreatingRow: {
        fn: (updater: Updater<MRT_Row<any> | null | true>) =>
          (
            table.options as MRT_TableOptions_Editing<any>
          ).onCreatingRowChange?.((old) => {
            const next = functionalUpdate(
              updater,
              old as MRT_Row<any> | null | true,
            );
            return next === true ? createRow(table as any) : next;
          }),
      },
      table_setEditingCell: {
        fn: (updater: Updater<MRT_Cell<any> | null>) =>
          (
            table.options as MRT_TableOptions_Editing<any>
          ).onEditingCellChange?.((old) => functionalUpdate(updater, old)),
      },
      table_setEditingRow: {
        fn: (updater: Updater<MRT_Row<any> | null>) =>
          (table.options as MRT_TableOptions_Editing<any>).onEditingRowChange?.(
            (old) => functionalUpdate(updater, old),
          ),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onCreatingRowChange: makeStateUpdater(
      'creatingRow',
      table,
    ) as OnChangeFn<any>,
    onEditingCellChange: makeStateUpdater(
      'editingCell',
      table,
    ) as OnChangeFn<any>,
    onEditingRowChange: makeStateUpdater(
      'editingRow',
      table,
    ) as OnChangeFn<any>,
  }),
  getInitialState: (initialState) => ({
    creatingRow: null,
    editingCell: null,
    editingRow: null,
    ...initialState,
  }),
};

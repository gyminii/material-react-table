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
import { type MRT_ColumnFilterFnsState, type MRT_FilterOption } from '../types';

export interface MRT_Table_FilterModes {
  setColumnFilterFns: (updater: Updater<MRT_ColumnFilterFnsState>) => void;
  setGlobalFilterFn: (updater: Updater<MRT_FilterOption>) => void;
  setShowColumnFilters: (updater: Updater<boolean>) => void;
  setShowGlobalFilter: (updater: Updater<boolean>) => void;
}

export interface MRT_TableOptions_FilterModes {
  onColumnFilterFnsChange?: OnChangeFn<MRT_ColumnFilterFnsState>;
  onGlobalFilterFnChange?: OnChangeFn<MRT_FilterOption>;
  onShowColumnFiltersChange?: OnChangeFn<boolean>;
  onShowGlobalFilterChange?: OnChangeFn<boolean>;
}

export interface MRT_TableState_FilterModes {
  columnFilterFns: MRT_ColumnFilterFnsState;
  globalFilterFn: MRT_FilterOption;
  showColumnFilters: boolean;
  showGlobalFilter: boolean;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtFilterModesFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtFilterModesFeature: MRT_Table_FilterModes;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtFilterModesFeature: MRT_TableOptions_FilterModes;
  }
  interface TableState_FeatureMap {
    mrtFilterModesFeature: MRT_TableState_FilterModes;
  }
}

export const mrtFilterModesFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtFilterModesFeature', table, {
      table_setColumnFilterFns: {
        fn: (updater: Updater<MRT_ColumnFilterFnsState>) =>
          (
            table.options as MRT_TableOptions_FilterModes
          ).onColumnFilterFnsChange?.((old) => functionalUpdate(updater, old)),
      },
      table_setGlobalFilterFn: {
        fn: (updater: Updater<MRT_FilterOption>) =>
          (
            table.options as MRT_TableOptions_FilterModes
          ).onGlobalFilterFnChange?.((old) => functionalUpdate(updater, old)),
      },
      table_setShowColumnFilters: {
        fn: (updater: Updater<boolean>) =>
          (
            table.options as MRT_TableOptions_FilterModes
          ).onShowColumnFiltersChange?.((old) =>
            functionalUpdate(updater, old),
          ),
      },
      table_setShowGlobalFilter: {
        fn: (updater: Updater<boolean>) =>
          (
            table.options as MRT_TableOptions_FilterModes
          ).onShowGlobalFilterChange?.((old) => functionalUpdate(updater, old)),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onColumnFilterFnsChange: makeStateUpdater('columnFilterFns', table),
    onGlobalFilterFnChange: makeStateUpdater('globalFilterFn', table),
    onShowColumnFiltersChange: makeStateUpdater('showColumnFilters', table),
    onShowGlobalFilterChange: makeStateUpdater('showGlobalFilter', table),
  }),
  getInitialState: (initialState) => ({
    columnFilterFns: {},
    globalFilterFn: 'fuzzy',
    showColumnFilters: false,
    showGlobalFilter: false,
    ...initialState,
  }),
};

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

export interface MRT_Table_FullScreen {
  setIsFullScreen: (updater: Updater<boolean>) => void;
}

export interface MRT_TableOptions_FullScreen {
  onIsFullScreenChange?: OnChangeFn<boolean>;
}

export interface MRT_TableState_FullScreen {
  isFullScreen: boolean;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtFullScreenFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtFullScreenFeature: MRT_Table_FullScreen;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtFullScreenFeature: MRT_TableOptions_FullScreen;
  }
  interface TableState_FeatureMap {
    mrtFullScreenFeature: MRT_TableState_FullScreen;
  }
}

export const mrtFullScreenFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtFullScreenFeature', table, {
      table_setIsFullScreen: {
        fn: (updater: Updater<boolean>) =>
          (table.options as MRT_TableOptions_FullScreen).onIsFullScreenChange?.(
            (old) => functionalUpdate(updater, old),
          ),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onIsFullScreenChange: makeStateUpdater('isFullScreen', table),
  }),
  getInitialState: (initialState) => ({
    isFullScreen: false,
    ...initialState,
  }),
};

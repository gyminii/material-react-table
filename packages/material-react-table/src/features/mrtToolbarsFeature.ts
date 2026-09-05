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

export interface MRT_Table_Toolbars {
  setShowAlertBanner: (updater: Updater<boolean>) => void;
  setShowToolbarDropZone: (updater: Updater<boolean>) => void;
}

export interface MRT_TableOptions_Toolbars {
  onShowAlertBannerChange?: OnChangeFn<boolean>;
  onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
}

export interface MRT_TableState_Toolbars {
  showAlertBanner: boolean;
  showToolbarDropZone: boolean;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtToolbarsFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtToolbarsFeature: MRT_Table_Toolbars;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtToolbarsFeature: MRT_TableOptions_Toolbars;
  }
  interface TableState_FeatureMap {
    mrtToolbarsFeature: MRT_TableState_Toolbars;
  }
}

export const mrtToolbarsFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtToolbarsFeature', table, {
      table_setShowAlertBanner: {
        fn: (updater: Updater<boolean>) =>
          (
            table.options as MRT_TableOptions_Toolbars
          ).onShowAlertBannerChange?.((old) => functionalUpdate(updater, old)),
      },
      table_setShowToolbarDropZone: {
        fn: (updater: Updater<boolean>) =>
          (
            table.options as MRT_TableOptions_Toolbars
          ).onShowToolbarDropZoneChange?.((old) =>
            functionalUpdate(updater, old),
          ),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onShowAlertBannerChange: makeStateUpdater('showAlertBanner', table),
    onShowToolbarDropZoneChange: makeStateUpdater('showToolbarDropZone', table),
  }),
  getInitialState: (initialState) => ({
    showAlertBanner: false,
    showToolbarDropZone: false,
    ...initialState,
  }),
};

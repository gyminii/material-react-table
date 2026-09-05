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
import { type MRT_DensityState } from '../types';

export interface MRT_Table_Density {
  setDensity: (updater: Updater<MRT_DensityState>) => void;
}

export interface MRT_TableOptions_Density {
  onDensityChange?: OnChangeFn<MRT_DensityState>;
}

export interface MRT_TableState_Density {
  density: MRT_DensityState;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtDensityFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtDensityFeature: MRT_Table_Density;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtDensityFeature: MRT_TableOptions_Density;
  }
  interface TableState_FeatureMap {
    mrtDensityFeature: MRT_TableState_Density;
  }
}

export const mrtDensityFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtDensityFeature', table, {
      table_setDensity: {
        fn: (updater: Updater<MRT_DensityState>) =>
          (table.options as MRT_TableOptions_Density).onDensityChange?.((old) =>
            functionalUpdate(updater, old),
          ),
      },
    });
  },
  getDefaultTableOptions: (table) => ({
    onDensityChange: makeStateUpdater('density', table),
  }),
  getInitialState: (initialState) => ({
    density: 'comfortable',
    ...initialState,
  }),
};

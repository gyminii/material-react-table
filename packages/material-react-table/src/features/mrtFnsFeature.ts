import {
  type AggregationFnDef,
  type FilterFn,
  type RowData,
  type SortFn,
  type TableFeature,
  type TableFeatures,
} from '@tanstack/react-table';

export interface MRT_TableOptions_Fns {
  aggregationFns?: Record<string, AggregationFnDef<any, any, any, any>>;
  filterFns?: Record<string, FilterFn<any, any>>;
  sortFns?: Record<string, SortFn<any, any>>;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtFnsFeature: TableFeature;
  }
  interface TableOptions_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtFnsFeature: MRT_TableOptions_Fns;
  }
}

/**
 * Core resolves string fn names through `table._rowModelFns`, which are the
 * registry objects registered on the features. Custom fns passed as table
 * options are merged over them per table, so a user's `filterFns: { myFn }`
 * keeps resolving from `filterFn: 'myFn'` as it did in v3.
 */
export const mrtFnsFeature: TableFeature = {
  initTableInstanceData: (table) => {
    const { aggregationFns, filterFns, sortFns } =
      table.options as MRT_TableOptions_Fns;
    const registries = (table as any)._rowModelFns;
    registries.aggregationFns = {
      ...registries.aggregationFns,
      ...aggregationFns,
    };
    registries.filterFns = { ...registries.filterFns, ...filterFns };
    registries.sortFns = { ...registries.sortFns, ...sortFns };
  },
};

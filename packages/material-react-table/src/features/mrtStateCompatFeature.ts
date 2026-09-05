import {
  assignTableAPIs,
  type RowData,
  type TableFeature,
  type TableFeatures,
  type TableState,
} from '@tanstack/react-table';

export interface MRT_Table_StateCompat<TFeatures extends TableFeatures> {
  /**
   * Snapshot of the full table state, kept for the v3 public API. Inside MRT
   * read `table.state` instead; it is what the component subscribed to.
   */
  getState: () => TableState<TFeatures>;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtStateCompatFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtStateCompatFeature: MRT_Table_StateCompat<TFeatures>;
  }
}

export const mrtStateCompatFeature: TableFeature = {
  constructTableAPIs: (table) => {
    assignTableAPIs('mrtStateCompatFeature', table, {
      table_getState: { fn: () => table.store.state },
    });
    //`header.getContext()` and `cell.getContext()` hand out the core instance,
    //not the React wrapper that carries the subscribed `state`, so MRT
    //components rendered through `flexRender` need the slice here too
    Object.defineProperty(table, 'state', {
      configurable: true,
      enumerable: false,
      get: () => table.store.state,
    });
  },
};

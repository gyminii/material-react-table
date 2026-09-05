import { type TableFeature } from '@tanstack/react-table';

export interface MRT_TableState_Loading {
  isLoading: boolean;
  isSaving: boolean;
  showLoadingOverlay: boolean;
  showProgressBars: boolean;
  showSkeletons: boolean;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtLoadingFeature: TableFeature;
  }
  interface TableState_FeatureMap {
    mrtLoadingFeature: MRT_TableState_Loading;
  }
}

/**
 * Loading flags are only ever set through the `state` table option, so this
 * feature owns the slices without exposing setters. `showSkeletons` stays
 * undefined by default: an explicit `false` opts out of skeletons while
 * loading, and the key must still be present for core to track the slice.
 */
export const mrtLoadingFeature: TableFeature = {
  getInitialState: (initialState) => ({
    isLoading: false,
    isSaving: false,
    showLoadingOverlay: false,
    showProgressBars: false,
    showSkeletons: undefined,
    ...initialState,
  }),
};

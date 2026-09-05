import {
  columnFacetingFeature,
  columnFilteringFeature,
  columnGroupingFeature,
  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  createExpandedRowModel,
  createFacetedMinMaxValues,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createGroupedRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  globalFilteringFeature,
  rowAggregationFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  rowPinningFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
} from '@tanstack/react-table';
import { mrtCellActionsFeature } from './mrtCellActionsFeature';
import { mrtColumnDraggingFeature } from './mrtColumnDraggingFeature';
import { mrtDensityFeature } from './mrtDensityFeature';
import { mrtEditingFeature } from './mrtEditingFeature';
import { mrtFilterModesFeature } from './mrtFilterModesFeature';
import { mrtFnsFeature } from './mrtFnsFeature';
import { mrtFullScreenFeature } from './mrtFullScreenFeature';
import { mrtLoadingFeature } from './mrtLoadingFeature';
import { mrtRefsFeature } from './mrtRefsFeature';
import { mrtRowDraggingFeature } from './mrtRowDraggingFeature';
import { mrtStateCompatFeature } from './mrtStateCompatFeature';
import { mrtToolbarsFeature } from './mrtToolbarsFeature';
import { MRT_AggregationFns } from '../fns/aggregationFns';
import { MRT_FilterFns } from '../fns/filterFns';
import { MRT_SortingFns } from '../fns/sortingFns';

/**
 * The static feature registry every MRT table is built from. Row models are
 * registered unconditionally; core skips a stage at runtime when its `manual*`
 * option is set, and a feature with empty state is an identity pass. The
 * faceted models are the exception, see `mrtFeaturesWithoutFacetedValues`.
 */
export const mrtFeatures = tableFeatures({
  aggregationFns: MRT_AggregationFns,
  columnFacetingFeature,
  columnFilteringFeature,
  columnGroupingFeature,
  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  expandedRowModel: createExpandedRowModel(),
  facetedMinMaxValues: createFacetedMinMaxValues(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  filteredRowModel: createFilteredRowModel(),
  filterFns: MRT_FilterFns,
  globalFilteringFeature,
  groupedRowModel: createGroupedRowModel(),
  mrtCellActionsFeature,
  mrtColumnDraggingFeature,
  mrtDensityFeature,
  mrtEditingFeature,
  mrtFilterModesFeature,
  mrtFnsFeature,
  mrtFullScreenFeature,
  mrtLoadingFeature,
  mrtRefsFeature,
  mrtRowDraggingFeature,
  mrtStateCompatFeature,
  mrtToolbarsFeature,
  paginatedRowModel: createPaginatedRowModel(),
  rowAggregationFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  rowPinningFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: MRT_SortingFns,
});

/**
 * Used when `enableFacetedValues` is off. Without the factories, core returns
 * an empty Map for unique values, `undefined` for min/max values, and the
 * pre-filtered row model for the faceted row model, so accessors are never
 * run just to build facets.
 */
export const mrtFeaturesWithoutFacetedValues = {
  ...mrtFeatures,
  facetedMinMaxValues: undefined,
  facetedRowModel: undefined,
  facetedUniqueValues: undefined,
};

export type MRT_Features = typeof mrtFeatures;

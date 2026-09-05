import { type RefObject } from 'react';
import {
  type RowData,
  type TableFeature,
  type TableFeatures,
} from '@tanstack/react-table';

export interface MRT_Table_Refs {
  refs: MRT_TableRefs;
}

export interface MRT_TableRefs {
  actionCellRef: RefObject<HTMLTableCellElement | null>;
  bottomToolbarRef: RefObject<HTMLDivElement | null>;
  editInputRefs: RefObject<null | Record<string, HTMLInputElement>>;
  filterInputRefs: RefObject<null | Record<string, HTMLInputElement>>;
  lastSelectedRowId: RefObject<null | string>;
  searchInputRef: RefObject<HTMLInputElement | null>;
  tableContainerRef: RefObject<HTMLDivElement | null>;
  tableFooterRef: RefObject<HTMLTableSectionElement | null>;
  tableHeadCellRefs: RefObject<null | Record<string, HTMLTableCellElement>>;
  tableHeadRef: RefObject<HTMLTableSectionElement | null>;
  tablePaperRef: RefObject<HTMLDivElement | null>;
  topToolbarRef: RefObject<HTMLDivElement | null>;
}

declare module '@tanstack/react-table' {
  interface Plugins {
    mrtRefsFeature: TableFeature;
  }
  interface Table_FeatureMap<
    TFeatures extends TableFeatures,
    TData extends RowData,
  > {
    mrtRefsFeature: MRT_Table_Refs;
  }
}

/**
 * The table instance is constructed once per table, so these plain ref objects
 * live as long as the table does.
 */
export const mrtRefsFeature: TableFeature = {
  initTableInstanceData: (table) => {
    (table as unknown as MRT_Table_Refs).refs = {
      actionCellRef: { current: null },
      bottomToolbarRef: { current: null },
      editInputRefs: { current: {} },
      filterInputRefs: { current: {} },
      lastSelectedRowId: { current: null },
      searchInputRef: { current: null },
      tableContainerRef: { current: null },
      tableFooterRef: { current: null },
      tableHeadCellRefs: { current: {} },
      tableHeadRef: { current: null },
      tablePaperRef: { current: null },
      topToolbarRef: { current: null },
    };
  },
};

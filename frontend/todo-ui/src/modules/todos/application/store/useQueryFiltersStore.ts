import { create } from "zustand";
import { QueryFiltersStore, initialState } from "./state";

export const useQueryFiltersStore = create<QueryFiltersStore>((set) => ({
  selectedFilter: initialState.selectedFilter,
  setFilter: (filter) => set((store) => ({ ...store, selectedFilter: filter })),
  resetFilter: () =>
    set((store) => ({ ...store, selectedFilter: initialState.selectedFilter })),
}));

export enum FiltersOptions {
  ALL = "",
  ACTIVE = "active",
  COMPLETED = "completed",
}

interface QueryFiltersActions {
  setFilter: (filter: FiltersOptions) => void;
  resetFilter: () => void;
}

interface QueryFiltersState {
  selectedFilter: FiltersOptions;
}

export type QueryFiltersStore = QueryFiltersState & QueryFiltersActions;

export const initialState: QueryFiltersState = {
  selectedFilter: FiltersOptions.ALL,
};

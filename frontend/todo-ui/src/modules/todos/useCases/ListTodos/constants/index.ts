export const DEFAULT_FILTER_OPTION: FilterOption = { key: "", value: "All" };

export const FILTER_OPTIONS: ReadonlyArray<FilterOption> = [
  DEFAULT_FILTER_OPTION,
  { key: "active", value: "Active" },
  { key: "completed", value: "Completed" },
];

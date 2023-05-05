import { FiltersOptions } from "@modules/todos/domain/enums";
import { QueryKey } from "@tanstack/react-query";

export const DEFAULT_FILTER_OPTION: FilterOption = { key: "", value: "All" };

export const FILTER_OPTIONS: ReadonlyArray<FilterOption> = [
  DEFAULT_FILTER_OPTION,
  { key: "active", value: "Active" },
  { key: "completed", value: "Completed" },
];

export const CACHE_KEY = (filter: FiltersOptions): QueryKey => [
  "todos",
  filter,
];

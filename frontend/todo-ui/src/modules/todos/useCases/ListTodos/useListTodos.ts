import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { shallow } from "zustand/shallow";
import { Todo, useQueryFiltersStore } from "@modules/todos/application";
import { todosRepository } from "@modules/todos/Providers";
import { CACHE_KEY } from "./constants";

const useListTodos = () => {
  const selectedFilter = useQueryFiltersStore(
    (store) => store.selectedFilter,
    shallow
  );

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY,
    queryFn: () => todosRepository.getTodos(selectedFilter),
    staleTime: ms("24h"),
  });
};

export default useListTodos;

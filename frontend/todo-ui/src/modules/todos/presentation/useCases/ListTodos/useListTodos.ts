import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { shallow } from "zustand/shallow";
import { todosRepository } from "../../../Providers";
import { Todo, useQueryFiltersStore } from "@modules/todos/application";
import { CACHE_KEY } from "./constants";

const useListTodos = () => {
  const selectedFilter = useQueryFiltersStore(
    (store) => store.selectedFilter,
    shallow
  );

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY(selectedFilter),
    queryFn: () => todosRepository.getTodos(selectedFilter),
    staleTime: ms("24h"),
  });
};

export default useListTodos;

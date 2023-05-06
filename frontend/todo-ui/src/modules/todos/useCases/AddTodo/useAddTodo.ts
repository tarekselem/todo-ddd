import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosRepository } from "@modules/todos/Providers";
import { AddTodo, Todo } from "@modules/todos/application";
import { CACHE_KEY } from "../ListTodos/constants";

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  const cacheKey = CACHE_KEY();
  const TEMP_ID = "000-000-0000";

  return useMutation<Todo, Error, AddTodo, TodoContext>({
    mutationFn: todosRepository.addTodo,

    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(cacheKey) || [];

      queryClient.setQueryData<Todo[]>(cacheKey, (todos = []) => [
        {
          ...newTodo,
          id: TEMP_ID,
        } as Todo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(cacheKey, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(cacheKey, context.previousTodos);
    },
  });
};

export default useAddTodo;

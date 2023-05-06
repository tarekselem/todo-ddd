import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosRepository } from "@modules/todos/Providers";
import { AddTodo, Todo } from "@modules/todos/application";
import { CACHE_KEY } from "../ListTodos/constants";

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, AddTodo, TodoContext>({
    mutationFn: todosRepository.addTodo,

    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos = []) => [
        newTodo as Todo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY, context.previousTodos);
    },
  });
};

export default useAddTodo;

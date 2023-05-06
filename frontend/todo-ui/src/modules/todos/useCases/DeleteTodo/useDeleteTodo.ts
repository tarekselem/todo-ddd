import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosRepository } from "@modules/todos/Providers";
import { Todo } from "@modules/todos/application";
import { CACHE_KEY } from "../ListTodos/constants";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string, TodoContext>({
    mutationFn: todosRepository.deleteTodo,

    onMutate: (id) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos = []) => [
        ...todos.filter((todo) => todo.id !== id),
      ]);
      return { previousTodos };
    },

    onError: (error, id, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY, context.previousTodos);
    },
  });
};

export default useDeleteTodo;

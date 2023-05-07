import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { todosRepository } from "@modules/todos/Providers";
import { Todo } from "@modules/todos/application";
import { CACHE_KEY } from "../ListTodos/constants";

const useDeleteTodo = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const cacheKey = CACHE_KEY();

  return useMutation<void, Error, string, TodoContext>({
    mutationFn: todosRepository.deleteTodo,

    onMutate: (id) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(cacheKey) || [];
      queryClient.setQueryData<Todo[]>(cacheKey, (todos = []) => [
        ...todos.filter((todo) => todo.id !== id),
      ]);
      return { previousTodos };
    },

    onError: (error, id, context) => {
      toast({
        title: "Error Occured",
        description: error.message,
        variant: "solid",
        isClosable: true,
        status: "error",
        duration: 1000,
        position: "bottom",
      });

      if (!context) return;
      queryClient.setQueryData<Todo[]>(cacheKey, context.previousTodos);
    },
  });
};

export default useDeleteTodo;

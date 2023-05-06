import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosRepository } from "@modules/todos/Providers";
import { Todo } from "@modules/todos/application";
import { CACHE_KEY } from "../ListTodos/constants";
import { useToast } from "@chakra-ui/toast";

const useCompleteTodo = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, string, TodoContext>({
    mutationFn: todosRepository.completeTodo,

    onMutate: (id) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos = []) => [
        ...todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: true } : todo
        ),
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
      queryClient.setQueryData<Todo[]>(CACHE_KEY, context.previousTodos);
    },
  });
};

export default useCompleteTodo;

import { IconButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import useDeleteTodo from "./useDeleteTodo";

interface Props {
  todoId: string;
}

export const DeleteTodo = ({ todoId }: Props) => {
  const deleteTodo = useDeleteTodo();

  return (
    <IconButton
      aria-label="Delete Task"
      size="xs"
      marginX={2}
      _hover={{ color: "red.400" }}
      icon={<MdDelete />}
      onClick={() => deleteTodo.mutate(todoId)}
    />
  );
};

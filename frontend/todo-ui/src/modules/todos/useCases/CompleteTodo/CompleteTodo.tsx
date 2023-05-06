import { IconButton } from "@chakra-ui/react";
import { MdDone } from "react-icons/md";
import useCompleteTodo from "./useCompleteTodo";

interface Props {
  todoId: string;
}

export const CompleteTodo = ({ todoId }: Props) => {
  const completeTodo = useCompleteTodo();

  return (
    <IconButton
      aria-label="Mark Completed"
      size="xs"
      marginX={2}
      _hover={{ color: "green" }}
      icon={<MdDone />}
      onClick={() => completeTodo.mutate(todoId)}
    />
  );
};

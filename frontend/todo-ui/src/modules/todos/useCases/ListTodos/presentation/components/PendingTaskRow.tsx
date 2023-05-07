import { Box, Flex, Td, Tr } from "@chakra-ui/react";
import { FaTimesCircle } from "react-icons/fa";
import { Todo } from "@modules/todos/application/models";
import { DeleteTodo } from "@modules/todos/useCases/DeleteTodo";
import { CompleteTodo } from "@modules/todos/useCases/CompleteTodo";

import TextCell from "./TextCell";

interface Props {
  data: Todo;
}
export const PendingTaskRow = ({ data }: Props) => {
  return (
    <Tr>
      <Td textAlign="start" paddingX={2}>
        <Flex>
          <CompleteTodo todoId={data.id} />
          <TextCell>{data.description}</TextCell>
        </Flex>
      </Td>

      <Td textAlign="center">
        <Flex gap={2} alignItems="center">
          <TextCell>{data.dueDate}</TextCell>
          <Box color="red.400">{data.isOverdue && <FaTimesCircle />}</Box>
        </Flex>
      </Td>

      <Td textAlign="center">
        <DeleteTodo todoId={data.id} />
      </Td>
    </Tr>
  );
};

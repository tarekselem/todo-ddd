import { Box, Flex, IconButton, Td, Tr } from "@chakra-ui/react";
import { MdDelete, MdDone } from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import { Todo } from "@modules/todos/application/models";
import TextCell from "./TextCell";

interface Props {
  data: Todo;
}
export const PendingTaskRow = ({ data }: Props) => {
  return (
    <Tr>
      <Td textAlign="start" paddingX={2}>
        <Flex>
          <IconButton
            aria-label="Mark Completed"
            size="xs"
            marginX={2}
            _hover={{ color: "green" }}
            icon={<MdDone />}
          />

          <TextCell>{data.description}</TextCell>
        </Flex>
      </Td>

      <Td textAlign="center">
        <Flex gap={2} alignItems="center">
          <TextCell>{data.dueDateTime}</TextCell>
          <Box color="red.400">{data.isOverdue && <FaTimesCircle />}</Box>
        </Flex>
      </Td>

      <Td textAlign="center">
        <IconButton
          aria-label="Delete Task"
          size="xs"
          marginX={2}
          _hover={{ color: "red.400" }}
          icon={<MdDelete />}
        />
      </Td>
    </Tr>
  );
};

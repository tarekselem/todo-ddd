import { Box, Flex, Td, Tr } from "@chakra-ui/react";
import { Todo } from "@modules/todos/application";
import { MdDoneAll } from "react-icons/md";
import StrickedTextCell from "./StrickedTextCell";

interface Props {
  data: Todo;
}
export const CompeletedTaskRow = ({ data }: Props) => {
  return (
    <Tr>
      <Td textAlign="start" paddingX={2}>
        <Flex paddingLeft={3} gap={3}>
          <MdDoneAll color="green" />
          <StrickedTextCell>{data.description}</StrickedTextCell>
        </Flex>
      </Td>

      <Td textAlign="center">
        <Box marginRight={10}>
          <StrickedTextCell>{data.dueDate}</StrickedTextCell>
        </Box>
      </Td>

      <Td></Td>
    </Tr>
  );
};

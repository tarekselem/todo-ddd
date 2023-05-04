import { Box, Flex, Td, Tr } from "@chakra-ui/react";
import { MdDoneAll } from "react-icons/md";
import StrickedTextCell from "./StrickedTextCell";

export const CompeletedTaskRow = () => {
  return (
    <Tr>
      <Td textAlign="start" paddingX={2}>
        <Flex paddingLeft={3} gap={3}>
          <MdDoneAll color="green" />
          <StrickedTextCell>Learn German</StrickedTextCell>
        </Flex>
      </Td>

      <Td textAlign="center">
        <Box marginRight={8}>
          <StrickedTextCell>Thursday, 4 May 2023</StrickedTextCell>
        </Box>
      </Td>

      <Td></Td>
    </Tr>
  );
};

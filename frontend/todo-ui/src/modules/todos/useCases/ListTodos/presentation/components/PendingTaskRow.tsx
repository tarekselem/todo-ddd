import { Box, Flex, IconButton, Td, Tr } from "@chakra-ui/react";
import { MdDelete, MdDone } from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import TextCell from "./TextCell";

interface Props {
  isExpired?: boolean;
}

export const PendingTaskRow = ({ isExpired = false }: Props) => {
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

          <TextCell>inches inches inches</TextCell>
        </Flex>
      </Td>

      <Td textAlign="center">
        <Flex gap={2} alignItems="center">
          <TextCell>Thursday, 4 May 2023</TextCell>
          <Box color="red.400">{isExpired && <FaTimesCircle />}</Box>
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

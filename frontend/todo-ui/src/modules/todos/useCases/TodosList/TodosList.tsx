import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { MdDone, MdDoneAll, MdDelete } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export const TodosList = () => {
  return (
    <TableContainer width="100%">
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td textAlign="start" paddingX={2}>
              <Flex>
                <IconButton
                  aria-label="Search database"
                  size="xs"
                  marginX={2}
                  _hover={{ color: "green" }}
                  icon={<MdDone />}
                />

                <Text fontWeight="medium">inches inches inches</Text>
              </Flex>
            </Td>

            <Td textAlign="center">
              <Text fontWeight="medium">Thursday, 4 May 2023</Text>
            </Td>

            <Td textAlign="center">
              <IconButton
                aria-label="Search database"
                size="xs"
                marginX={2}
                _hover={{ color: "red.400" }}
                icon={<MdDelete />}
              />
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="start" paddingX={2}>
              <Flex>
                <Box marginX={3}>
                  <MdDoneAll color="green" />
                </Box>

                <Text
                  fontWeight="hairline"
                  textDecoration="line-through"
                  textDecorationThickness="from-font"
                >
                  Learn German
                </Text>
              </Flex>
            </Td>
            <Td textAlign="center">
              <Text
                fontWeight="hairline"
                textDecoration="line-through"
                textDecorationThickness="from-font"
              >
                Thursday, 4 May 2023
              </Text>
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
        <Tfoot flexDirection={{ base: "column", md: "row" }}>
          <Tr>
            <Th>3 item left</Th>
            <Th w="40%"></Th>
            <Th w="5%" textAlign="end">
              <Menu>
                <MenuButton
                  marginRight={0}
                  marginLeft={2}
                  size="sm"
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  No Action
                </MenuButton>
                <MenuList p={0} minW="0" w={120}>
                  <MenuItem key={1}>All</MenuItem>
                  <MenuItem key={1}>Active</MenuItem>
                  <MenuItem key={1}>Completed</MenuItem>
                  {/* {options.map((option) => (
                    <MenuItem
                      key={option.key}
                      onClick={() => handleSelection(option)}
                    >
                      {option.value}
                    </MenuItem>
                  ))} */}
                </MenuList>
              </Menu>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

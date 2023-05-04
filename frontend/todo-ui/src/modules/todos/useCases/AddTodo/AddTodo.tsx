import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { BsChevronDown } from "react-icons/bs";
import {
  getDueDateOptionsList,
  DueDateOption,
  DEFAULT_OPTION,
} from "../../domain/utils";

export const AddTodo = () => {
  const [selectedDueDate, setselectedDueDate] = useState(DEFAULT_OPTION);

  const handleSelection = (selectedOption: DueDateOption) => {
    setselectedDueDate(selectedOption);
  };

  const options = getDueDateOptionsList();
  const todoNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (todoNameRef.current) {
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
      <form onSubmit={handleSubmit}>
        <Flex padding={2} gap={2} direction={{ base: "column", md: "row" }}>
          <InputGroup>
            <InputLeftElement children={<FcTodoList />} />
            <Input
              ref={todoNameRef}
              borderRadius={20}
              placeholder="What needs to be done?"
              variant="filled"
            />
          </InputGroup>

          <Box minWidth="20%">
            <Menu>
              <MenuButton
                w="100%"
                borderRadius={20}
                as={Button}
                rightIcon={<BsChevronDown />}
              >
                {selectedDueDate.value}
              </MenuButton>
              <MenuList maxWidth={20}>
                {options.map((option) => (
                  <MenuItem
                    key={option.key}
                    onClick={() => handleSelection(option)}
                  >
                    {option.value}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

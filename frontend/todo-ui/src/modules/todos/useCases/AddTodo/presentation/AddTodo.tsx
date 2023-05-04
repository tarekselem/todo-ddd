import { useRef } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import DueDateSelector from "./components/DueDateSelector";

export const AddTodo = () => {
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
            <DueDateSelector
              selectionChanged={(selectedItem) => console.log(selectedItem)}
            />
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

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
import useAddTodo from "../useAddTodo";

export const AddTodo = () => {
  const descriptionRef = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (descriptionRef.current) descriptionRef.current.value = "";
  });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (descriptionRef.current) {
      addTodo.mutate({ description: descriptionRef.current.value });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
      <form onSubmit={handleSubmit}>
        <Flex padding={2} gap={2} direction={{ base: "column", md: "row" }}>
          <InputGroup>
            <InputLeftElement children={<FcTodoList />} />
            <Input
              ref={descriptionRef}
              borderRadius={20}
              placeholder="What needs to be done?"
              variant="filled"
              minLength={10}
              isRequired
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

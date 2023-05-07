import { useRef, useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { DueDateOptions } from "@modules/todos/domain/enums";
import DueDateSelector from "./components/DueDateSelector";
import useAddTodo from "../useAddTodo";

export const AddTodo = () => {
  const [selectedDueDate, setSelectedDueDate] = useState<DueDateOptions>();
  const descriptionRef = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (descriptionRef.current) descriptionRef.current.value = "";
  });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (descriptionRef.current) {
      addTodo.mutate({
        description: descriptionRef.current.value,
        dueDateOption: selectedDueDate!,
      });
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
              selectionChanged={(selectedItem) =>
                setSelectedDueDate(selectedItem.key)
              }
            />
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

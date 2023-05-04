import { Flex } from "@chakra-ui/react";
import { ListTodos, AddTodo } from "./useCases";

export const TodosContainer = () => {
  return (
    <Flex direction="column" alignItems="center" gap={10}>
      <AddTodo />
      <ListTodos />
    </Flex>
  );
};

export default TodosContainer;

import { Flex } from "@chakra-ui/react";
import { ListTodos, AddTodo } from "./useCases";

export const TodosContainer = () => {
  return (
    <Flex direction="column" alignItems="center">
      <AddTodo />
      <ListTodos />
    </Flex>
  );
};

export default TodosContainer;

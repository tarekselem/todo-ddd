import { Flex } from "@chakra-ui/react";
import { ListTodos } from "./ListTodos";
import { AddTodo } from "./AddTodo";

export const TodosContainer = () => {
  return (
    <Flex direction="column" alignItems="center">
      <AddTodo />
      <ListTodos />
    </Flex>
  );
};

export default TodosContainer;

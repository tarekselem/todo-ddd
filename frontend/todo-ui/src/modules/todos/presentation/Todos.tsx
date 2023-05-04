import React from "react";
import { Flex } from "@chakra-ui/react";
import { TodosList, AddTodo } from "../useCases";

export const Todos = () => {
  return (
    <Flex direction="column" alignItems="center" gap={10}>
      <AddTodo />
      <TodosList />
    </Flex>
  );
};

export default Todos;

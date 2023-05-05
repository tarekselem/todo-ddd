import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Spinner,
} from "@chakra-ui/react";
import { CompeletedTaskRow, PendingTaskRow, TableFooter } from "./components";
import useListTodos from "../useListTodos";

export const ListTodos = () => {
  const { data, isLoading, error } = useListTodos();

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <TableContainer width="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th w="20%"></Th>
            <Th w="5%"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((todo) =>
            todo.isCompleted ? (
              <CompeletedTaskRow key={todo.id} data={todo} />
            ) : (
              <PendingTaskRow key={todo.id} data={todo} />
            )
          )}
        </Tbody>
      </Table>
      <TableFooter totalCount={data.length} />
    </TableContainer>
  );
};

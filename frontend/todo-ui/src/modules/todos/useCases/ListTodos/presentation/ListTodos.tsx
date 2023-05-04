import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { CompeletedTaskRow, PendingTaskRow, TableFooter } from "./components";

export const ListTodos = () => {
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
          <PendingTaskRow />
          <PendingTaskRow isExpired={true} />
          <CompeletedTaskRow />
          <CompeletedTaskRow />
        </Tbody>
      </Table>
      <TableFooter />
    </TableContainer>
  );
};

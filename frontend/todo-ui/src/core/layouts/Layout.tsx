import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "./components";

export const Layout = () => {
  return (
    <Flex direction="column" padding={5} gap={5}>
      <Navbar />
      <Outlet />
    </Flex>
  );
};

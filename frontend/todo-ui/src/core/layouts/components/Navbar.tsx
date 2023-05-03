import { Link } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";
import logo from "@assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

export const Navbar = () => {
  return (
    <Flex justifyContent="space-between">
      <Link to="./">
        <Image src={logo} alt="Games-Hub" boxSize="60px" objectFit="contain" />
      </Link>

      <ColorModeSwitch />
    </Flex>
  );
};

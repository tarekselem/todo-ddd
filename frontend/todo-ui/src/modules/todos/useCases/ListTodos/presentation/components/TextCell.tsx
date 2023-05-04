import { Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const TextCell = ({ children }: PropsWithChildren) => (
  <Text fontWeight="medium">{children}</Text>
);

export default TextCell;

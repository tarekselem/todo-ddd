import { PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

const StrickedTextCell = ({ children }: PropsWithChildren) => (
  <Text
    fontWeight="hairline"
    textDecoration="line-through"
    textDecorationThickness="from-font"
  >
    {children}
  </Text>
);

export default StrickedTextCell;

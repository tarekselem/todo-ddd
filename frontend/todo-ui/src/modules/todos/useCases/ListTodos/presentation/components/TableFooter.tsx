import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import FilterSelector from "./FilterSelector";

interface Props {
  totalCount: number;
}
export const TableFooter = ({ totalCount }: Props) => {
  return (
    <Flex padding={3}>
      <Text w="20%">{totalCount} item left</Text>
      <Spacer />
      <Box>
        <FilterSelector />
      </Box>
    </Flex>
  );
};

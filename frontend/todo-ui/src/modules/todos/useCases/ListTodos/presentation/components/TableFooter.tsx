import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import FilterSelector from "./FilterSelector";

export const TableFooter = () => {
  return (
    <Flex padding={3}>
      <Text w="20%">3 item left</Text>
      <Spacer />
      <Box>
        <FilterSelector selectionChanged={(opt) => console.log(opt)} />
      </Box>
    </Flex>
  );
};

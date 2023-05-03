import { Box, Button, Flex } from "@chakra-ui/react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Message, NotFound } from "./components";
import { Navbar } from "@core/layouts";

export const ErrorPage = () => {
  const errorResponse = useRouteError();

  return (
    <Flex direction="column" padding={5} gap={5}>
      <Navbar />

      <Box textAlign="center" py={10} px={6}>
        {isRouteErrorResponse(errorResponse) ? (
          <NotFound />
        ) : (
          <Message type="error" error={errorResponse as Error} />
        )}

        <Link to={"/"}>
          <Button
            my={10}
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default ErrorPage;

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme, initialColorMode } from "@core/config";
import QueryProvider from "@core/providers/queryClientProvider";
import router from "router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={initialColorMode} />
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ChakraProvider>
  </React.StrictMode>
);

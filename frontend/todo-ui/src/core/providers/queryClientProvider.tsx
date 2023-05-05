import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@core/config/queryClient";
import { isDevelopement } from "@core/utils/app-enviroments";

const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {isDevelopement() && <ReactQueryDevtools></ReactQueryDevtools>}
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;

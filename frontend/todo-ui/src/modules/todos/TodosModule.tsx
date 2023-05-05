// import InversifyProvider from "./Providers";
import { TodosContainer } from "./useCases";

export const TodosModule = () => {
  return (
    <TodosContainer />

    //TODO: add DI Provider

    // <InversifyProvider>
    //   <TodosContainer />
    // </InversifyProvider>
  );
};

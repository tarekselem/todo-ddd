// import InversifyProvider from "./Providers";
import { TodosContainer } from "./presentation";
import "./Providers";
export const TodosModule = () => {
  return (
    <TodosContainer />

    //TODO: add DI Provider

    // <InversifyProvider>
    //   <TodosContainer />
    // </InversifyProvider>
  );
};

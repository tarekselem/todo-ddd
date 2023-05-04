import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@core/layouts";
import { TodosModule } from "@modules/todos";
import { ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodosModule />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@core/layouts";
import { HomePage, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;

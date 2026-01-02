import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            }
        ]
    }
]);

export default router;
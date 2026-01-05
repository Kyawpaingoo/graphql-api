import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/Home";
import RoomDetail from "./components/pages/RoomDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/room/:id",
                element: <RoomDetail />
            }
        ],
    },
    
]);

export default router;
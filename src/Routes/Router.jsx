import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ErrorPage from "../Components/ErrorPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage />
    },
]);
export default router;
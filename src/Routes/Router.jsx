import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ErrorPage from "../Components/ErrorPage";
import AddService from "../Components/AddService";
import PrivateRoute from "../Provider/PrivateRoute";
import AllServices from "../Components/AllServices";
import ServiceDetails from "../Components/ServiceDetails";
import MyServices from "../Components/MyServices";
import MyReviews from "../Components/MyReviews";
import Blog from "../Components/Blog";
const router = createBrowserRouter([
    {
        path: "/",
       Component: Root,
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
            {
                path:"/add-service",
                Component:()=>(
                    <PrivateRoute>
                        <AddService />
                    </PrivateRoute>
                )
            },
             {
                path: "/services",
                element: <AllServices />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                 path:"/details/:id",
                 Component:() => (
                     <PrivateRoute>
                         <ServiceDetails />
                     </PrivateRoute>
                 )
            },
            {
                path:"/my-services",
                Component:()=>(
                    <PrivateRoute>
                        <MyServices />
                    </PrivateRoute>
                )
            },
            {
                path:"/my-reviews",
                Component:()=>(
                    <PrivateRoute>
                        <MyReviews />
                    </PrivateRoute>
                )
            }

        ]
    },
    {
        path: "/*",
        element: <ErrorPage />
    },
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound/>
    },
    // {
    //     path: "/formulario",
    //     element: <Formulario />,
    //     errorElement: <NotFound/>
    // },
    // {
    //     path: "/firma",
    //     element: <Firma />,
    //     errorElement: <NotFound/>
    // },
]);
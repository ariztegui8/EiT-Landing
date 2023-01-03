import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';

import { router } from "./router";
import { RouterProvider } from "react-router-dom";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
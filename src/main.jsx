import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Orders from "./Components/Orders/Orders";
import Grandpa from "./Components/Grandpa/Grandpa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("tshirt.json"),
      },
      {
        path: "review",
        element: <Orders></Orders>,
      },
      {
        path: "/grandpa",
        element: <Grandpa></Grandpa>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

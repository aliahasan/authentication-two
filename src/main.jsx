import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Order from "./Components/Order";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Root from "./Components/Root/Root";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoutes from "./Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : '/orders',
        element : <PrivateRoutes>
          <Order></Order>
        </PrivateRoutes>
      },
      {
        path : '/profile',
        element : <PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

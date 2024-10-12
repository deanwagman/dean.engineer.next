"use client";

import Container from "@mui/material/Container";

import Home from "./views/Home";
import Start from "./views/Start";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const routerOptions = {
  basename: "/lift",
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/start",
      element: <Start />,
    },
  ],
  routerOptions
);

const App = () => <RouterProvider router={router} />;

export default App;

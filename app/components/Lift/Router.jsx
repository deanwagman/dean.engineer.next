"use client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Workout from "./Workout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/workout",
          element: <Workout />,
        },
      ],
    },
  ],
  {
    basename: "/lift",
  }
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,

        path: "/",
        Component: Home,
      },
      {
        path: "/Apps",
        Component: Apps,
      },
      {
        path: "/Installation",
        Component: Installation,
      },
      {
        path: "/Apps/:id",
        element: <AppsDetails></AppsDetails>,
      },
    ],
  },
]);

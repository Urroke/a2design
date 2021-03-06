import React from "react";
import DefaultLayout from "./layouts/DefaultLayout.js";
import { Redirect } from "react-router-dom";
import HomePage from "./modules/HomePage";
import NewsPage from "./modules/NewsPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    exact: true,
    layout: DefaultLayout,
    component: () => <HomePage></HomePage>
  },
  {
    path: "/news",
    exact: true,
    layout: DefaultLayout,
    component: () => <NewsPage></NewsPage>
  }
];

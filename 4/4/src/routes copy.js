import React from "react";
import DefaultLayout from "./layouts/defaultLayout";
import ClearLayout from "./layouts/clearLayout";
import { Redirect } from "react-router-dom";
import MainPage from "./containers/MainPage";
import CasePage from "./containers/CasePage";
import LogIn from "./modules/LogIn";
import Test from "./test.js";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/cases" />
  },
  {
    path: "/cases",
    exact: true,
    layout: DefaultLayout,
    component: () => <MainPage></MainPage>
  },
  {
    path: "/test",
    exact: true,
    layout: DefaultLayout,
    component: () => <Test></Test>
  },
  {
    path: "/profile",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    exact: true,
    layout: ClearLayout,
    component: () => <LogIn></LogIn>
  },
  {
    path: "/registration",
    exact: true,
    layout: DefaultLayout,
    component: () => <Test></Test>
  },
  {
    path: "/cases/:caseName",
    exact: true,
    layout: DefaultLayout,
    component: CasePage
  }
];

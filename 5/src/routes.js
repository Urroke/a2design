import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./modules/HomePage";
import PeopleIdPage from "./containers/PeopleIdPage";
import PeoplePage from "./containers/PeoplePage";
import FeedPage from "./containers/FeedPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <HomePage></HomePage>
  },
  {
    path: "/people",
    exact: true,
    layout: DefaultLayout,
    component: () => <PeoplePage></PeoplePage>
  },
  {
    path: "/feed",
    exact: true,
    layout: DefaultLayout,
    component: () => <FeedPage></FeedPage>
  },
  {
    path: "/people/:id",
    exact: true,
    layout: DefaultLayout,
    component: props => <PeopleIdPage {...props}></PeopleIdPage>
  }
];

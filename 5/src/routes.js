import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./modules/home-page/HomePage";
import PeopleIdPage from "./containers/PeopleIdPage";
import PeoplePage from "./containers/PeoplePage";
import FeedPage from "./containers/FeedPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: HomePage
  },
  {
    path: "/people",
    exact: true,
    layout: DefaultLayout,
    component: PeoplePage
  },
  {
    path: "/feed",
    exact: true,
    layout: DefaultLayout,
    component: FeedPage
  },
  {
    path: "/people/:id",
    exact: true,
    layout: DefaultLayout,
    component: PeopleIdPage
  }
];

import { GET_NEWS } from "./actionsTypes";
import { ServerRequestNews } from "../../server/serverRequestNews";

const PushNewsToStore = News => ({
  type: GET_NEWS,
  payload: News
});

export const GetNews = () => async dispatch => {
  try {
    const response = await ServerRequestNews();
    dispatch(PushNewsToStore(response));
  } catch (e) {
    console.log(e);
  } finally {
  }
};

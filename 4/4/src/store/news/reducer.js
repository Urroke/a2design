import { GET_NEWS } from "./actionsTypes";

const initialState = {
  values: []
};

const NewsHandler = {
  [GET_NEWS](state, action) {
    return { ...state, values: action.payload };
  }
};

export default (state = initialState, action) =>
  NewsHandler[action.type] ? NewsHandler[action.type](state, action) : state;

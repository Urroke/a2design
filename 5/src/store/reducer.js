import {
  SET_USER,
  SET_USERS,
  SET_USER_POSTS,
  SET_USER_FROM_LIST,
  SET_COMENTS,
  SET_POSTS
} from "./actionsTypes";
import ColorMaker from "../helper/ColorMaker";

const initialState = {
  user: {},
  users: [],
  posts: [],
  userListEmpty: true,
  coments: [],
  allPosts: []
};

const PeopleHandler = {
  [SET_USER](state, action) {
    action.payload.color = ColorMaker(0.25, 0.45, 0.3, 0.5);
    return { ...state, user: action.payload };
  },
  [SET_USERS](state, action) {
    if (state.users.length !== 0) return { ...state };
    const arr = action.payload.map(el => {
      return { ...el, color: ColorMaker(0.25, 0.45, 0.2, 0.5) };
    });
    return { ...state, users: arr, userListEmpty: false };
  },
  [SET_USER_POSTS](state, action) {
    return { ...state, posts: action.payload };
  },
  [SET_USER_FROM_LIST](state, action) {
    const userFromList = state.users.find(
      el => Number(action.payload) === el.id
    );
    return { ...state, user: userFromList };
  },
  [SET_COMENTS](state, action) {
    return { ...state, coments: action.payload };
  },
  [SET_POSTS](state, action) {
    return { ...state, allPosts: action.payload };
  }
};

export default (state = initialState, action) =>
  PeopleHandler[action.type]
    ? PeopleHandler[action.type](state, action)
    : state;

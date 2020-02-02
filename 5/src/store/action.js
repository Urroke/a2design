import {
  SET_USER,
  SET_USERS,
  SET_USER_POSTS,
  SET_USER_FROM_LIST,
  SET_COMENTS,
  SET_POSTS
} from "./actionsTypes";

export const SetUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const SetUser = user => ({
  type: SET_USER,
  payload: user
});

export const SetSingleUserPosts = posts => ({
  type: SET_USER_POSTS,
  payload: posts
});

export const SetUserFromList = id => ({
  type: SET_USER_FROM_LIST,
  payload: id
});

export const SetComents = coments => ({
  type: SET_COMENTS,
  payload: coments
});

export const SetPosts = posts => ({
  type: SET_POSTS,
  payload: posts
});

export const SetAllUsers = () => dispatch =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => dispatch(SetUsers(res)));

export const SetSingleUser = id => dispatch =>
  fetch("https://jsonplaceholder.typicode.com/users?id=" + id)
    .then(res => res.json())
    .then(res => dispatch(SetUser(res[0])));

export const SetUserPosts = id => dispatch => {
  dispatch(SetSingleUserPosts([]));
  fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
    .then(res => res.json())
    .then(res => dispatch(SetSingleUserPosts(res)));
};

export const SetPostComents = id => dispatch => {
  dispatch(SetComents([]));
  fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id)
    .then(res => res.json())
    .then(res => dispatch(SetComents(res)));
};

export const SetAllPosts = () => dispatch =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => dispatch(SetPosts(res)));

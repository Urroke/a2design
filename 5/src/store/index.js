import { createStore, combineReducers, applyMiddleware } from "redux";
import peopleReducer from "./reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true
});

export const store = createStore(
  combineReducers({ peopleReducer }),
  applyMiddleware(thunk, logger)
);

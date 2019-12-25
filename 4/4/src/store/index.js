import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import News from "./news/reducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true
});

export const store = createStore(
  combineReducers({ News }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);

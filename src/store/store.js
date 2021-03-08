import { applyMiddleware, createStore } from "redux";
import reducers from "./../reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

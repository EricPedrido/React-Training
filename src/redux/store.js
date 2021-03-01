import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // useful for future use as we have more middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
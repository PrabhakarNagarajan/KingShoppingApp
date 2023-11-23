import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlWare = [logger];

const composeEnhancers = compose(applyMiddleware(...middlWare));

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composeEnhancers
);

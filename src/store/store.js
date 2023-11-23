import { compose, createStore, applyMiddleware } from "react-redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlWare = [logger];

const composeEnhancers = compose(applyMiddleware(...middlWare));

export const store = createStore(rootReducer, undefined, composeEnhancers);

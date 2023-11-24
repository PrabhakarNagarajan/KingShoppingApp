import { legacy_createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggermiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());
  next(action);
  console.log("next state:", store.getState());
};
const middleware = [loggermiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleware));

const store = legacy_createStore(rootReducer, undefined, composedEnhancers);

export default store;

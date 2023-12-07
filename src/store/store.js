import { legacy_createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [loggermiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = legacy_createStore(
  presistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

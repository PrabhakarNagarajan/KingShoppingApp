import { legacy_createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = legacy_createStore(
  presistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

import { combineReducers } from "react-redux";
import { UserReducer } from "../store/user/user.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
});
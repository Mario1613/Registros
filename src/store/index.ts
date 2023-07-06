import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import context from "./slices/context";

const reducer = combineReducers({
  context,
});

export type RootState = ReturnType<typeof reducer>;

export default configureStore({
  reducer: reducer,
});

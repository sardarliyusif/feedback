import { combineReducers } from "redux";
import { feedbackReducer } from "./feedback";
import { categoriesReducer } from "./categories";
import { userReducer } from "./user";

export const reducer = combineReducers({
  feedback: feedbackReducer,
  categories: categoriesReducer,
  users: userReducer,
});

export * from "./feedback";

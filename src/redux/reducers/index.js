import { combineReducers } from "redux";
import { feedbackReducer } from "./feedback";
import { categoriesReducer } from "./categories";
import { userReducer } from "./user";
import { commentReducer } from "./comment";

export const reducer = combineReducers({
  feedback: feedbackReducer,
  categories: categoriesReducer,
  comments: commentReducer,
  users: userReducer,
});

export * from "./feedback";

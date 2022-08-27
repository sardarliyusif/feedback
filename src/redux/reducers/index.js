import { combineReducers } from "redux";
import { feedbackReducer } from "./feedback";
import { selectedCategoriesReducer } from "./selectedCategories";

export const reducer = combineReducers({
  feedback: feedbackReducer,
  selectedCategories: selectedCategoriesReducer,  
});

export * from "./feedback";

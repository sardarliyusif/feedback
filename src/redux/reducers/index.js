import { combineReducers } from 'redux';
import { feedbackReducer } from './feedback';
import { categoriesReducer } from './categories';

export const reducer = combineReducers({
	feedback: feedbackReducer,
	categories: categoriesReducer,
});

export * from './feedback';

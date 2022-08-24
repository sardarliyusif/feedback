import { combineReducers } from 'redux';
import { feedbackReducer } from './feedback';

export const reducer = combineReducers({
	feedback: feedbackReducer,
});

export * from './feedback';

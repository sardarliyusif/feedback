import dayjs from 'dayjs';
import { find, mergeWith, cloneDeep, filter, findIndex } from 'lodash';
import { nanoid } from 'nanoid';
import { Status } from '../../data/statuses';
import { FeedbackActions } from '../actions/feedback';

export const feedbackReducer = (state = [], action) => {
	const user = localStorage.getItem('user');

	switch (action.type) {
		case FeedbackActions.CREATE:
			if (user === null) return state;
			return [
				...state,
				{
					title: action.payload.title,
					category: action.payload.category,
					description: action.payload.description,
					author: user,
					status: Status.SUGGESTION,
					upvotes: 0,
					createdAt: dayjs().format('YYYY-MM-DD-HH:mm'),
					id: nanoid(),
				},
			];
		case FeedbackActions.EDIT:
			const found = find(state, (f) => f.id === action.payload.id);
			if (!found) return state;
			const foundIndex = findIndex(state, (f) => f.id === action.payload.id);

			const editData = {
				title: action.payload.editedData.title, // ''
				category: action.payload.editedData.category, // '' null
				status: action.payload.editedData.status, // ''
				description: action.payload.editedData.description, // 0 ''
			};

			const mergedData = mergeWith(
				cloneDeep(found),
				editData,
				(prevValue, newValue) =>
					['', 0, null, undefined, 'Admin'].includes(newValue) ? prevValue : newValue
			);

			const clone = cloneDeep(state);
			clone.splice(foundIndex, 1, mergedData);
			return clone;

		default:
			return state;
	}
};

import orderBy from 'lodash/orderBy';

// enum
export const Sorter = {
	MOST_UPVOTE: 'most_upvote',
	LEAST_UPVOTE: 'least_upvote',
	MOST_COMMENT: 'most_comment',
	LEAST_COMMENT: 'least_comment',
};

export const sortingFunctions = {
	[Sorter.MOST_UPVOTE]: (array) =>
		orderBy(array, ['upvotes', 'name'], ['desc', 'desc']),
	[Sorter.LEAST_UPVOTE]: (array) =>
		orderBy(array, ['upvotes', 'name'], ['asc', 'asc']),
	[Sorter.MOST_COMMENT]: (array) =>
		orderBy(array, ['comments', 'name'], ['desc', 'desc']),
	[Sorter.LEAST_COMMENT]: (array) =>
		orderBy(array, ['comments', 'name'], ['asc', 'asc']),
};

export const sorting = [
	{
		label: 'Most Upvote',
		value: 'most_upvote',
	},
	{
		label: 'Least Upvote',
		value: 'least_upvote',
	},
	{
		label: 'Most Comment',
		value: 'most_comment',
	},
	{
		label: 'Least Comment',
		value: 'least_comment',
	},
];

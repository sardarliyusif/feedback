import orderBy from 'lodash/orderBy';

// enum
export const Sorter = {
	MOST_UPVOTE: 'most_upvote',
	LEAST_UPVOTE: 'least_upvote',
};

export const sortingFunctions = {
	[Sorter.MOST_UPVOTE]: (array) =>
		orderBy(array, ['upvotes', 'name'], ['desc', 'desc']),
	[Sorter.LEAST_UPVOTE]: (array) =>
		orderBy(array, ['upvotes', 'name'], ['asc', 'asc']),
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
];

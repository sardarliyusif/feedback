import React from 'react';
import { sorting } from '../../data/sorting';

export const Dropdown = ({ sort, setSort }) => {
	return (
		<div>
			<label>Sort by</label>
			<select
				name='sort'
				onChange={(e) => {
					setSort(e.target.value);
				}}
				defaultValue={sort}
			>
				{sorting.map(({ label, value }, index) => (
					<option key={index} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

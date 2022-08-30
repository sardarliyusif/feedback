import React from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';
import { useSelector } from 'react-redux';
import { Status, statues } from '../../data/statuses';
import './style.scss';

export const Statuses = () => {
	const feedback = useSelector((s) => s.feedback);

	const calculated = groupBy(feedback, (f) => f.status);

	return (
		<div className='statuses'>
			{map(
				filter(statues, (s) => s.value !== Status.SUGGESTION),
				({ label, value }) => {
					return (
						<div key={value}>
							{label} ({calculated[value].length})
							<ul>
								{map(calculated[value], ({ id, title, description }) => (
									<li key={id}>
										<h2>{title}</h2>
										<p>{description}</p>
									</li>
								))}
							</ul>
						</div>
					);
				}
			)}
		</div>
	);
};

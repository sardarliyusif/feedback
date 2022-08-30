import React, { useMemo } from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import countBy from 'lodash/countBy';
import { useSelector } from 'react-redux';
import { StatusCircle } from '../StatusCircle';
import { Status, statues } from '../../data/statuses';
import './style.scss';

export const StatusBar = () => {
	const feedback = useSelector((s) => s.feedback);

	const calculated = useMemo(() => {
		return countBy(feedback, (f) => f.status);
	}, [feedback]);

	return (
		<>
			{map(
				filter(statues, (s) => s.value !== Status.SUGGESTION),
				({ label, value, color }) => (
					<div key={value} className='status'>
						<StatusCircle name={label} backgroundColor={color} />
						<div className='status__count'>{calculated[value]}</div>
					</div>
				)
			)}
		</>
	);
};

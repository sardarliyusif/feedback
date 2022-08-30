import React from 'react';
import './style.scss';

export const StatusCircle = ({ name, backgroundColor }) => {
	return (
		<div className='status__name'>
			<span className='status__name--color' style={{ backgroundColor }}></span>
			<span className='status__name__value'>{name}</span>
		</div>
	);
};

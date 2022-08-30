import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from '../components/shared';
import { Statuses } from '../components/Statuses';

export const RoadMap = () => {
	return (
		<div className='container'>
			<Card mode='dark' padding='large' align='center' justify='between'>
				<div>
					<Link to={-1}>
						<Typography size='small' weight='bold'>
							<FaAngleLeft />
							Go Back
						</Typography>
					</Link>
					<Typography.Title weight='bold'>Roadmap</Typography.Title>
				</div>
				<div>
					<Link to='/feedback/create'>
						<Button>
							<Typography size='small' weight='bold'>
								+ Add new feedback
							</Typography>
						</Button>
					</Link>
				</div>
			</Card>
			<Statuses />
		</div>
	);
};

import React, { useContext } from 'react';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import categories from '../../data/categories.json';
import { Typography, Card, Button, Chip } from '../shared';
import { Feedback } from '../../context/Feedback';

export const RightCards = () => {
	const { feedbacks, selectedCategories } = useContext(Feedback);

	return (
		<div>
			<Card mode='dark' align='center' justify='between' padding='small'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<RiLightbulbFlashLine color='#ffffff' style={{ margin: '8px' }} />
					<Typography size='large' weight='bold'>
						{feedbacks.length} Suggestion
					</Typography>
					<Dropdown />
				</div>

				<Link to='feedback/create'>
					<Button>
						<Typography size='small' weight='bold'>
							+ Add new feedback
						</Typography>
					</Button>
				</Link>
			</Card>

			{feedbacks
				.filter(
					({ category }) =>
						selectedCategories.length === 0 || selectedCategories.includes(category)
				)
				.map(({ id, title, category, description, comments, upvotes }) => (
					<Card key={id} padding='large' mode='light' justify='between'>
						<div>{upvotes}</div>
						<Link to='/detail' style={{ flex: '1' , display : "flex" , flexDirection : "column" }}>
							<Typography.Title color='purple'>{title}</Typography.Title>
							<Typography color='light'>{description}</Typography>
							<Chip>{categories.find((c) => c.value === category)?.label}</Chip>
						</Link>
						<div>{comments?.length}</div>
					</Card>
				))}
		</div>
	);
};

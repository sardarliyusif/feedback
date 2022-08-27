import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Select } from 'antd';
import { FaAngleLeft } from "react-icons/fa";
import categories from '../data/categories.json';
import { createFeedback } from '../redux/actions/feedback';
import { Typography } from '../components/shared';


const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: '${label} is required!',
	min: '${label} must be longer than ${min} symbols',
	max: '${label} must be lesss than ${max} symbols',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
/* eslint-enable no-template-curly-in-string */

export const CreateFeedback = () => {
	const dispatch = useDispatch();
	const feedbacks = useSelector((state) => state.feedback);
	const onFinish = (values) => {
		dispatch(createFeedback(values));
	};

	return (
		<>
		<Link to={'/'}><Typography color='light' size = 'small' weight = 'bold' ><FaAngleLeft/>Go Back</Typography></Link>
		<Form
			{...layout}
			name='nest-messages'
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name='title'
				label='Title'
				rules={[
					{
						min: 3,
						max: 46,
						required: true,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name='category'
				label='Category'
				rules={[
					{
						required: true,
					},
				]}
			>
				<Select options={categories} />
			</Form.Item>
			<Form.Item
				name='description'
				label='Description'
				rules={[
					{
						min: 10,
						max: 256,
					},
				]}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
		
		</>
	);
};

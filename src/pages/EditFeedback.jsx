import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Select } from 'antd';
import categories from '../data/categories.json';
import { editFeedback } from '../redux/actions/feedback';
import { useParams } from 'react-router-dom';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};

export const EditFeedback = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const onFinish = (values) => {
		console.log(values);
		dispatch(editFeedback(id, values));
	};

	return (
		<Form {...layout} name='nest-messages' onFinish={onFinish}>
			<Form.Item name='title' label='Title'>
				<Input />
			</Form.Item>
			<Form.Item name='category' label='Category'>
				<Select options={categories} />
			</Form.Item>
			<Form.Item name='description' label='Description'>
				<Input.TextArea />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

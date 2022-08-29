import React from "react";
import { useDispatch } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";
import { Form, Input, Select } from "antd";
import categories from "../data/categories.json";
import { statues } from "../data/statuses";
import { editFeedback, deleteFeedback } from "../redux/actions/feedback";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, Card, Typography } from "../components/shared";

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
  const navigate = useNavigate();
  const onFinish = (values) => {
    dispatch(editFeedback(id, values));
    navigate(`/feedback/${id}/view`);
    console.log(values);
  };

  return (
    <div className="container-s">
      <Link to={`/feedback/${id}/view`}>
        <Typography color="light" size="small" weight="bold">
          <FaAngleLeft />
          Go Back
        </Typography>
      </Link>
      <Card>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Category">
            <Select options={categories} />
          </Form.Item>
          <Form.Item name="status" label="Update Status">
            <Select options={statues} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              onClick={() => {
                dispatch(deleteFeedback(id));
                navigate('/');
              }}
              background="danger"
              type="button"
            >
              <Typography size="small">Delete</Typography>
            </Button>
            <Link to={`/feedback/${id}/view`}>
              <Button background="blue" type="button">
                <Typography size="small">Cancel</Typography>
              </Button>
            </Link>
            <Button htmlType="submit">
              <Typography size="small">Save Changes</Typography>
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

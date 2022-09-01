import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";
import { Form, Input, Select } from "antd";
import categories from "../data/categories.json";
import { statues } from "../data/statuses";
import { FaPenNib } from "react-icons/fa";
import { editFeedback, deleteFeedback } from "../redux/actions/feedback";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, Card, Typography } from "../components/shared";
import { find } from "lodash";

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
  const feedback = find(
    useSelector((s) => s.feedback),
    (f) => f.id === id
  );
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
      <Card style={{ position: "relative", marginTop: "70px" } } direction='column'>
        <Card
          mode="colored"
          radius="circle"
          style={{ position: "absolute", top: "-30px" }}
        >
          <FaPenNib style={{ color: "#fff", fontSize: "16px" }} />
        </Card>
        <Typography.Title color='purple' weight='bold' style={{margin:'30px 0'}}>Editing {feedback.title}</Typography.Title>
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
                navigate("/");
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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { find, map } from "lodash";
import { upvoteFeedback } from "../redux/actions/feedback";
import categories from "../data/categories.json";
import { Typography, Button, Card, Chip } from "../components/shared";

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedback);
  const feedback = find(feedbacks, (e) => e.id === id);
  return (
    <div className="container-m">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <Typography color="light" size="small" weight="bold">
            <FaAngleLeft />
            Go Back
          </Typography>
        </Link>
        <Link to={`/feedback/${id}/edit`}>
          <Button>
            <Typography size="small" weight="bold">
              Edit Feedback
            </Typography>
          </Button>
        </Link>
      </div>

      <Card padding="large" mode="light" justify="between">
              <Chip.Upvote
                onClick={() => dispatch(upvoteFeedback(id, feedback?.upvotes, feedback?.selected))}
                selected={feedback?.selected}
              >
                <FaAngleUp /> {feedback?.upvotes}
              </Chip.Upvote>
              <Link
                to={`/feedback?/${id}/view`}
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography.Title color="purple">{feedback?.title}</Typography.Title>
                <Typography color="light">{feedback?.description}</Typography>
                <Chip>
                  {categories.find((c) => c.value === feedback?.category)?.label}
                </Chip>
              </Link>
              <div>{feedback?.comments?.length}</div>
            </Card>

      

      <div>for comments</div>
      <div>for add comment</div>
    </div>
  );
};

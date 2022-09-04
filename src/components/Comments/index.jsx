import React from "react";
import find from "lodash/find";
import { useSelector } from "react-redux";
import { Card, Typography } from "../shared";
import { useParams } from "react-router-dom";
import { Comment } from "../Comment";
import "./style.scss";

export const Comments = () => {
  const { id } = useParams();
  const feedbacks = useSelector((state) => state.feedback);
  const feedback = find(feedbacks, (e) => e.id === id);

  return (
    <Card className="comments" direction='column'>
      <Typography color="purple" weight="bold">
        {feedback?.comments?.length ?? 0} Comments
      </Typography>
      <Comment/>
    </Card>
  );
};

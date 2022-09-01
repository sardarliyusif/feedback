import React, { useState } from "react";
import find from "lodash/find";
import map from "lodash/map";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "../shared";
import { CommentForm } from "../CommentForm";
import "./style.scss";
import { ReplyForm } from "../ReplyForm";

export const Comment = () => {
  const { id } = useParams();
  const feedbacks = useSelector((state) => state.feedback);
  const feedback = find(feedbacks, (e) => e.id === id);
  const [activeReply, setAvtiveReply] = useState(null);
  const handleShow = (id) => {
    if (id === activeReply) {
      setAvtiveReply(null);
    } else {
      setAvtiveReply(id);
    }
  };
  return map(feedback?.comments, (comment) => (
    <div key={comment.id} className="comment">
      <img src={comment.user.image} alt="" />
      <div className="comment__body">
        <div className="comment__body__title">
          <div className="comment__body__title__name">
            <Typography color="purple" size="small" weight="bold">
              {comment.user.name}
            </Typography>
            <Typography color="light" size="small" weight="small">
              @{comment.user.username}
            </Typography>
          </div>
          <Typography
            color="blue"
            size="small"
            weight="bold"
            className="comment__body__title__link"
            onClick={() => handleShow(comment.id)}
          >
            Reply
          </Typography>
        </div>
        <Typography
          color="light"
          size="small"
          className="comment__body__content"
        >
          {comment.content}
        </Typography>
        {map(comment?.replies , (e) => {
          return (
            
            <div >fggre</div>
          )
        })}
        <ReplyForm setAvtiveReply = {setAvtiveReply} show={comment.id === activeReply}  />
      </div>
    </div>
  ));
};

import { filter, map } from "lodash";
import { nanoid } from "nanoid";
import data from "../../data/data.json";
import { CommentActions } from "../actions/comment";

// const initialComments = map(data.productRequests, (element) => {
//   return map(element.comments, (element) => ({
//     id: nanoid(),
//     content: element.content,
//     replies: map(element.replies, (replay) => ({
//       content: replay.content,
//       replyingTo: replay.replyingTo,
//     })),
//   }));
// });

const comments = filter(
  map(data.productRequests, (d) => d.comments),
  (comment) => comment
);
let allComments = [];
map(comments, (e) => (allComments = [...allComments, ...e]));
const initialComments = map(allComments, (comment) => ({
  id: nanoid(),
  content: comment.content,
  replies: map(comment.replies, (replay) => ({
    content: replay.content,
    replyingTo: replay.replyingTo,
  })),
}));

export const commentReducer = (state = initialComments, action) => {
  switch (action) {
    case CommentActions.COMMENT:
      return state;
    case CommentActions.REPLY:
      return state;
    default:
      return state;
  }
};

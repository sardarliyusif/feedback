import dayjs from "dayjs";
import { find, map, mergeWith, cloneDeep, findIndex, some } from "lodash";
import { nanoid } from "nanoid";
import { Status } from "../../data/statuses";
import { FeedbackActions, CommentActions } from "../actions/feedback";
import data from "../../data/data.json";

const initialFeedbacks = map(data.productRequests, (e) => {
  return {
    title: e.title,
    category: e.category,
    description: e.description,
    author: localStorage.getItem("user"),
    status: e.status,
    upvotes: e.upvotes,
    selected: false,
    createdAt: dayjs().format("YYYY-MM-DD-HH:mm"),
    comments: map(e.comments, (c) => {
      return {
        content: c.content,
        id: nanoid(),
        user: c.user,
        replies: c.replies,
      };
    }),
    id: nanoid(),
  };
});

// Feedback REDUCER

export const feedbackReducer = (state = initialFeedbacks, action) => {
  const user = localStorage.getItem("user");

  switch (action.type) {
    case FeedbackActions.CREATE:
      if (user === null) return state;
      return [
        ...state,
        {
          title: action.payload.title,
          category: action.payload.category,
          description: action.payload.description,
          author: user,
          status: Status.SUGGESTION,
          upvotes: 0,
          selected: false,
          createdAt: dayjs().format("YYYY-MM-DD-HH:mm"),
          id: nanoid(),
        },
      ];
    case FeedbackActions.EDIT:
      const found = find(state, (f) => f.id === action.payload.id);
      if (!found) return state;
      const foundIndex = findIndex(state, (f) => f.id === action.payload.id);

      const editData = {
        title: action.payload.editedData.title, // ''
        category: action.payload.editedData.category, // '' null
        status: action.payload.editedData.status, // ''
        description: action.payload.editedData.description, // 0 ''
      };

      const mergedData = mergeWith(
        cloneDeep(found),
        editData,
        (prevValue, newValue) =>
          ["", 0, null, undefined, "Admin"].includes(newValue)
            ? prevValue
            : newValue
      );

      const clone = cloneDeep(state);
      clone.splice(foundIndex, 1, mergedData);
      return clone;
    case FeedbackActions.UPVOTE:
      const id = action.payload.id;
      let selected = action.payload.selected;
      // find element with id that we want to upvote
      const has = some(state, (f) => f.id === action.payload.id);
      // if not found return
      if (!has) return state;
      // make cloe of state in order of not to change the original object
      const cloned = cloneDeep(state);
      if (selected === true) {
        find(cloned, (f) => f.id === id).selected = false;
        find(cloned, (f) => f.id === id).upvotes = action.payload.upvotes - 1;
      } else if (selected === false) {
        find(cloned, (f) => f.id === id).selected = true;
        find(cloned, (f) => f.id === id).upvotes = action.payload.upvotes + 1;
      }
      return cloned;
    case FeedbackActions.DELETE:
      const deletedFeedback = find(state, (f) => f.id === action.payload.id);
      if (!deletedFeedback) return state;
      const deletedIndex = findIndex(state, (f) => f.id === action.payload.id);
      const clonedState = cloneDeep(state);
      clonedState.splice(deletedIndex, 1);
      return clonedState;
    // For Comments
    case CommentActions.COMMENT:
      return state;
    case CommentActions.REPLY:
      return state;
    default:
      return state;
  }
};

// CREATE
// EDIT
// UPVOTE

export const FeedbackActions = {
  CREATE: "CREATE",
  EDIT: "EDIT",
  DELETE: "DELETE",
  UPVOTE: "UPVOTE",
};

export const createFeedback = (feedback) => ({
  type: FeedbackActions.CREATE,
  payload: feedback,
});
export const editFeedback = (id, editedData) => ({
  type: FeedbackActions.EDIT,
  payload: { id, editedData },
});
export const deleteFeedback = () => ({ type: FeedbackActions.DELETE });
// bu bele olmamalidi
// export const upvoteFeedback = (upvotes) => ({
//   type: FeedbackActions.UPVOTE,
//   payload: {upvotes},
// });
export const upvoteFeedback = (id, upvotes , selected) => ({
  type: FeedbackActions.UPVOTE,
  payload: { id, upvotes , selected },
});

// dispatch(createFeedback({ title: '', category: '', description: '' }))
// dispatch(editFeedback(id, { status: '' }))
// dispatch(editFeedback(id, { title: '', category: '', description: '', status: '' }))

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
export const upvoteFeedback = () => ({ type: FeedbackActions.UPVOTE });

// dispatch(createFeedback({ title: '', category: '', description: '' }))
// dispatch(editFeedback(id, { status: '' }))
// dispatch(editFeedback(id, { title: '', category: '', description: '', status: '' }))

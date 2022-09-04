// Feedbacks Actions ENUM
export const FeedbackActions = {
  CREATE: "CREATE",
  EDIT: "EDIT",
  DELETE: "DELETE",
  UPVOTE: "UPVOTE",
};


// Feedbacks Actions

export const createFeedback = (feedback) => ({
  type: FeedbackActions.CREATE,
  payload: feedback,
});
export const editFeedback = (id, editedData) => ({
  type: FeedbackActions.EDIT,
  payload: { id, editedData },
});
export const deleteFeedback = (id) => ({
  type: FeedbackActions.DELETE,
  payload: { id },
});
export const upvoteFeedback = (id, upvotes, selected) => ({
  type: FeedbackActions.UPVOTE,
  payload: { id, upvotes, selected },
});




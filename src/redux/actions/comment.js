// Comments Actions ENUM 

export const CommentActions = {
    COMMENT: "COMMENT",
    REPLY: "REPLY",
  };

  
// Comments Actions

export const addComment = (id , comment) => ({
    type: CommentActions.COMMENT,
    payload: { id, comment },
  });
  export const addReply = (id , reply) => ({
    type: CommentActions.REPLY,
    payload: { id, reply },
  });
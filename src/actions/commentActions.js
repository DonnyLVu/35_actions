export const SET_COMMENT = 'SET_COMMENT';
export const setComment = (idex, comment) => ({
  type: SET_COMMENT,
  payload: (idex, comment)
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (index) => ({
  type: DELETE_COMMENT,
  payload: index
});

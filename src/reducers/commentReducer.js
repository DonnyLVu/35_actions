// eslint-disable-next-line max-len
import { CREATE_COMMENT, DELETE_COMMENT, DELETE_COMMENTS } from '../actions/commentActions';

export const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENTS:
      return {
        ...state,
        // eslint-disable-next-line max-len
        comments: state.comments.filter(comment => comment.index !== action.payload)
      };
    case DELETE_COMMENT:
      return {
        ...state,
        // eslint-disable-next-line max-len
        comments: state.comments.filter(comment => comment.commentTitle !== action.payload)
      };
    default:
      return state;
  }
}

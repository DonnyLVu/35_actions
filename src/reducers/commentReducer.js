import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const initialState = {
  comments: []
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        // eslint-disable-next-line max-len
        posts: state.comments.filter(comment => comment.title !== action.payload)
      };
    default:
      return state;
  }
}

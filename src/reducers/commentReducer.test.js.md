import postReducer from './postReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('blog reducer', () => {
  it('Adds comment', () => {
    const state = {
      posts: []
    };

    const action = createComment({
      postIndex: 0,
      comment: 'comment 1'
    });

    const newState = postReducer(state, action);
    expect(newState).toEqual({
      comments: [{ postIndex: 0, comment: 'comment 1' }]
    });
  });

  it('Deletes comment', () => {
    const state = {
      comments: [{ postIndex: 0, comment: 'comment 1' }]
    };

    const action = deleteComment('Title 1');
    expect(postReducer(state, action)).toEqual({
      posts: []
    });
  });
});

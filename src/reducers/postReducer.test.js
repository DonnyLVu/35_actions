import postReducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

describe('blog reducer', () => {
  it('Adds Post', () => {
    const state = {
      posts: []
    };

    const action = createPost({
      title: 'Title 1',
      context: 'Context 1'
    });

    const newState = postReducer(state, action);
    expect(newState).toEqual({
      posts: [{ title: 'Title 1', context: 'Context 1' }]
    });
  });

  it('Deletes Post', () => {
    const state = {
      posts: [{ title: 'Title 1', context: 'Context 1' }]
    };

    const action = deletePost('Title 1');
    expect(postReducer(state, action)).toEqual({
      posts: []
    });
  });
});

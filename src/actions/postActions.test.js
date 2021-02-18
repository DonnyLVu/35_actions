import {
  createPost,
  CREATE_POST,
  DELETE_POST,
  deletePost
} from './postActions';

describe('postActions', () => {
  it('Creates a post', () => {
    const ACTION = createPost({
      title: 'Title 1',
      context: 'Context 1'
    });

    expect(ACTION).toEqual({
      type: CREATE_POST,
      payload: { title: 'Title 1', context: 'Context 1' }
    });
  });

  it('Deletes a post', () => {
    const ACTION = deletePost({ title: 'Title 1' });

    expect(ACTION).toEqual({
      type: DELETE_POST,
      payload: { title: 'Title 1' }
    });
  });
});

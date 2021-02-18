
import { countPosts, getPosts } from './BlogSelector.js';

describe('blog selectors', () => {
  it('Select Posts from state', () => {
    const state = {
      posts: [{ title: 'Title 2', context: 'Context 2' }]
    };
    // eslint-disable-next-line max-len
    expect(getPosts(state)).toEqual([{ title: 'Title 2', context: 'Context 2' }]);
  });

  it('Counts number of post in list', () => {
    const state = {
      // eslint-disable-next-line max-len
      posts: [{ title: 'Title 2', context: 'Context 2' }, { title: 'Title 3', context: 'Context 3' }, { title: 'Title 4', context: 'Context 4' }]
    };
    expect(countPosts(state)).toEqual(3);
  });
});

import { getPosts } from './BlogSelector.js';

describe('blog selectors', () => {
  it('Select Posts from state', () => {
    const state = {
      posts: [{ title: 'Title 2', context: 'Context 2' }]
    };
    console.log(state)
    expect(getPosts(state)).toEqual(
      [{ title: 'Title 2', context: 'Context 2' }]);
  });
});

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { deletePost } from '../../actions/postActions';

export const Post = ({ title, content }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
    console.log('post deleted');
  };

  return (
    <>
      <dl>
        <dt>title</dt>
        <dd>{title}</dd>

        <dt>Content</dt>
        <dd>{content}</dd>
      </dl>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

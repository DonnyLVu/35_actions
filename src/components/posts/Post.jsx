import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { deleteComments } from '../../actions/commentActions';
import CommentForm from '../form/CommentForm';
import CommentList from '../comments/CommentList';

export const Post = ({ title, content, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
    dispatch(deleteComments(index));
    console.log('post deleted');
  };

  return (
    <>
      <dl>
        <dt>POST TITLE</dt>
        <dd>{title}</dd>

        <dt>Content</dt>
        <dd>{content}</dd>
      </dl>
      <button onClick={handleClick}>Delete</button>
      <CommentForm index={index} />
      <CommentList index={index} />
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

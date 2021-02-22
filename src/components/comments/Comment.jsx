import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export const Comment = ({ commentTitle, commentContent }) => {
  const dispatch = useDispatch();

  const handleClickComments = () => {
    dispatch(deleteComment(commentTitle));
    console.log('Comment deleted');
  };

  return (
    <>
      <dl>
        <dt>COMMENT TITLE</dt>
        <dd>{commentTitle}</dd>

        <dt>Content</dt>
        <dd>{commentContent}</dd>
      </dl>
      <button onClick={handleClickComments}>Delete</button>
    </>
  );
};

Comment.propTypes = {
  commentTitle: PropTypes.string.isRequired,
  commentContent: PropTypes.string.isRequired
};

import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/CommentSelector';
import { Comment } from './Comment';

const CommentList = ({ index }) => {
  const comments = useSelector(getComments) || [];

  // eslint-disable-next-line max-len
  const commentElements = comments.filter(comment => comment.index === index).map(comment => (
    <li key={comment.commentTitle}>
      <Comment {...comment} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default CommentList;

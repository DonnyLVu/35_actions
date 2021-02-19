import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/CommentSelector';
import { Comment } from './Comment';

const CommentList = () => {
  const comments = useSelector(getComments);

  const commentElements = comments.map(comment => (
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

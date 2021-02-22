import React, { useState } from 'react';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';

const CommentForm = ({ index }) => {
  const dispatch = useDispatch();

  const [commentTitle, setTitle] = useState('');
  const [commentContent, setContent] = useState('');

  const handleSubmitComments = (e) => {
    e.preventDefault();
    console.log('comment created');
    dispatch(createComment({ commentTitle, commentContent, index }));
  };

  return (
    <form onSubmit={handleSubmitComments}>
      <input
        type="text"
        placeholder="comment Title"
        value={commentTitle}
        onChange={({ target }) => setTitle(target.value)}
      />

      <input
        type="text"
        placeholder="comment Content"
        value={commentContent}
        onChange={({ target }) => setContent(target.value)}
      />

      <button>Create Comment</button>

    </form>
  );
};

export default CommentForm;

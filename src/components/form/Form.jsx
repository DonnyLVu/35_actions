import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from '../../state/BlogsProvider';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('post created');
    dispatch(createPost({ title, content }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />

      <button>Create Post</button>

    </form>
  );
};

export default Form;

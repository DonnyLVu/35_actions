import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BlogsProvider } from './state/BlogsProvider';

render(
  <BlogsProvider>
    <App />
  </BlogsProvider>,
  document.getElementById('root')
);

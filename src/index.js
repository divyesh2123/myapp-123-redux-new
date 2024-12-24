import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import User from './User';
import PostInfo from './PostInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

     
      <PostInfo/>

    </Provider>
   
  </React.StrictMode>
);


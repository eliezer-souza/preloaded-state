import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './App';

configureStore.then((response) =>
  ReactDOM.render(
    <Provider store={response}>
      <App />
    </Provider>, 
    document.getElementById('root')));

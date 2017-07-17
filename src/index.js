import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import PhraseBook from './components/PhraseBook';
import reducers from './reducers';
import sync from './middleware/sync';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider store={
      createStore(
        reducers,
        composeEnhancers(
          applyMiddleware(sync)))
    }>
    <PhraseBook />
  </Provider>,
  document.getElementById('root')
);
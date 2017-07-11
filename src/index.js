import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import PhraseBook from './components/PhraseBook';
import reducers from './reducers';

import './index.css';

ReactDOM.render(
  <Provider store={
      createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    }>
    <PhraseBook />
  </Provider>,
  document.getElementById('root')
);
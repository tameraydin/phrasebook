import React from 'react';
import ReactDOM from 'react-dom';
import PhraseBook from './PhraseBook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhraseBook />, div);
});
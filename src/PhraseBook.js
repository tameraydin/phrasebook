import React, { Component } from 'react';
import InputBar from './components/InputBar';
import PhraseTable from './components/PhraseTable';

const _data = [
  {
    '_lang_1': 'Lorem ipsum',
    '_lang_2': 'Dolor met'
  }, {
    '_lang_1': 'Lorem ipsum',
    '_lang_2': 'Dolor met'
  }, {
    '_lang_1': 'Lorem ipsum',
    '_lang_2': 'Dolor met'
  }
];

class PhraseBook extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <PhraseTable entries={_data} />
      </div>
    );
  }
}

export default PhraseBook;

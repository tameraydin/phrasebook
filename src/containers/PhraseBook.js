import React, { Component } from 'react';

import AppWrapper from './AppWrapper';
import InputBar from './InputBar';
import EntryEditor from './EntryEditor';
import EntryTable from './EntryTable';

class PhraseBook extends Component {
  render() {
    return (
      <AppWrapper>
        <InputBar />
        <EntryEditor />
        <EntryTable />
      </AppWrapper>
    );
  }
}

export default PhraseBook;

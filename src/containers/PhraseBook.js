import React, { Component } from 'react';

import AppWrapper from './AppWrapper';
import InputBar from './InputBar';
import EntryEditor from './EntryEditor';
import EntryTable from './EntryTable';
import StatusBar from './StatusBar';

class PhraseBook extends Component {
  render() {
    return (
      <AppWrapper>
        <InputBar />
        <EntryEditor />
        <EntryTable />
        <StatusBar />
      </AppWrapper>
    );
  }
}

export default PhraseBook;

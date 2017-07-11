import React, { Component } from 'react';
import AppWrapper from '../containers/AppWrapper';
import InputBar from '../containers/InputBar';
import EntryTable from '../containers/EntryTable';

class PhraseBook extends Component {
  render() {
    return (
      <AppWrapper>
        <InputBar />
        <EntryTable />
      </AppWrapper>
    );
  }
}

export default PhraseBook;
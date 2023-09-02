import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextBar from '../components/TextBar';
import mapEntries from '../utils/mapEntries';
import APP_MODES from '../constants/AppModes';

const STATE_TO_HINT_MAP = {
  [APP_MODES.ADD]: [
    '<strong>[ENTER]</strong>: Save',
    '<strong>[ESC]</strong>: Cancel',
    '<strong>[TAB]</strong>: Jump'
  ].join('&nbsp;'),
  [APP_MODES.EDIT]: [
    '<strong>[ENTER]</strong>: Save',
    '<strong>[ESC]</strong>: Cancel / Delete',
    '<strong>[TAB]</strong>: Jump'
  ].join('&nbsp;'),
  [APP_MODES.SEARCH]: '<strong>[ENTER]</strong>: Add as a new entry',
  [APP_MODES.LOADING]: 'Syncing in progress. Please wait...'
};

class StatusBar extends Component {
  render() {
    return (
      <TextBar
        left={this.props.size
          ? `<strong>${this.props.size}</strong>` + (
            this.props.size === 1
              ? ' entry found'
              : ' entries found'
            )
          : 'No entries found'
        }
        right={this.props.hint}
      />
    );
  }
};


const mapStateToProps = state => {
  const mappedEntries = mapEntries(state);
  return {
    ...mappedEntries,
    size: state.mode === APP_MODES.EDIT
      ? mappedEntries.entries.length + 1
      : mappedEntries.entries.length,
    hint: state.search.trim().length === 0 && state.mode === APP_MODES.SEARCH
      ? ''
      : STATE_TO_HINT_MAP[state.mode]
  };
};

const StatusBarContainer = connect(
  mapStateToProps
)(StatusBar);

export default StatusBarContainer;

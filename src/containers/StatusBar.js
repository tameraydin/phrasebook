import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextBar from '../components/TextBar';
import mapEntries from '../utils/mapEntries';

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
        right={''}
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
  };
};

const StatusBarContainer = connect(
  mapStateToProps
)(StatusBar);

export default StatusBarContainer;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEntries, setMode } from '../actions'
import { LOADING } from '../constants/AppModes';

const ipcRenderer = window.require('electron').ipcRenderer;

class Wrapper extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  componentDidMount() {
    this.props.retrieveEntries();
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    className: 'full-height mode--' + state.mode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveEntries: () => {
      dispatch(setMode(LOADING));
      ipcRenderer.send('retrieve-entries');
      ipcRenderer.once('entries-retrieved', (event, entries) => {
        dispatch(setEntries(entries));
      });
    }
  };
};

const WrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

export default WrapperContainer;
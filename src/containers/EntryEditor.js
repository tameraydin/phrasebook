import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyValueEditor from '../components/KeyValueEditor';
import { ADD, EDIT, LOADING } from '../constants/AppModes';
import { saveEntry, deleteEntry, searchEntry, setMode } from '../actions'

const ipcRenderer = window.require('electron').ipcRenderer;

class EntryEditor extends Component {
  render() {
    if (this.props.mode !== ADD && this.props.mode !== EDIT) {
      return (null);
    }

    return (
      <KeyValueEditor
          keyText={this.props.keyText}
          valueText={this.props.valueText}
          placeholder="Type a value here..."
          submitHandler={(key, value) => {
            if (key === this.props.keyText && value === this.props.valueText) {
              return this.props.dismissEditor(this.props.initialValue);
            }
            this.props.saveEntry(key, value, this.props.entryIndex);
          }}
          cancelHandler={this.props.mode === EDIT
            ? this.props.deleteEntry.bind(
                null, this.props.entryIndex, this.props.initialValue)
            : this.props.dismissEditor.bind(
                null, this.props.initialValue)} />
    );
  }
}

const mapStateToProps = state => {
  return {
    keyText: state.editor.key,
    valueText: state.editor.value,
    entryIndex: state.editor.index,
    initialValue: state.editor.initialValue,
    mode: state.mode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEntry: (...args) => {
      let currState = dispatch(saveEntry(...args));
      _syncEntries(dispatch, currState.entries, currState.mode);
    },
    deleteEntry: (entryIndex, initialValue) => {
      if (window.confirm('Do you want to DELETE this entry?')) {
        let currState = dispatch(deleteEntry(entryIndex));
        _syncEntries(dispatch, currState.entries, currState.mode);
      } else {
        dispatch(searchEntry(initialValue));
      }
    },
    dismissEditor: (initialValue) => {
      dispatch(searchEntry(initialValue));
    }
  };
};

const _syncEntries = (dispatch, entries, initialMode) => {
  dispatch(setMode(LOADING));
  ipcRenderer.send('sync-entries', entries);
  ipcRenderer.once('entries-synced', (event, err) => {
    if (err) {
      alert('Oops. Entries could not be saved...');
    }
    dispatch(setMode(initialMode));
  });
};

const EntryEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryEditor);

export default EntryEditorContainer;

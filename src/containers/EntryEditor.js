import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyValueEditor from '../components/KeyValueEditor';
import { EDIT, SEARCH } from '../constants/AppModes';
import { saveEntry, deleteEntry, searchEntry } from '../actions'

class EntryEditor extends Component {
  render() {
    if (this.props.mode === SEARCH) {
      return (null);
    }

    return (
      <KeyValueEditor
          keyText={this.props.keyText}
          valueText={this.props.valueText}
          submitHandler={(key, value) => {
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
      dispatch(saveEntry(...args));
    },
    deleteEntry: (entryIndex, initialValue) => {
      if (window.confirm('Are you sure to DELETE this entry?')) {
        dispatch(deleteEntry(entryIndex));
      } else {
        dispatch(searchEntry(initialValue));
      }
    },
    dismissEditor: (initialValue) => {
      dispatch(searchEntry(initialValue));
    }
  };
};

const EntryEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryEditor);

export default EntryEditorContainer;
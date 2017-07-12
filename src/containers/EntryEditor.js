import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyValueEditor from '../components/KeyValueEditor';
import { SEARCH } from '../constants/AppModes';
import { saveEntry, searchEntry } from '../actions'

class EntryEditor extends Component {
  render() {
    if (!this.props.isOnEditMode) {
      return (null);
    }

    return (
      <KeyValueEditor
          keyText={this.props.keyText}
          valueText={this.props.valueText}
          submitHandler={(key, value) => {
            this.props.saveEntry(key, value, this.props.entryIndex);
          }}
          cancelHandler={this.props.dismissEditor.bind(null, this.props.keyText)} />
    );
  }
}

const mapStateToProps = state => {
  return {
    keyText: state.editor.key,
    valueText: state.editor.value,
    entryIndex: state.editor.index,
    isOnEditMode: state.mode !== SEARCH
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEntry: (...args) => {
      dispatch(saveEntry(...args));
    },
    dismissEditor: (initialSearchText) => {
      dispatch(searchEntry(initialSearchText));
    }
  };
};

const EntryEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryEditor);

export default EntryEditorContainer;
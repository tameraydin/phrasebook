import { connect } from 'react-redux';
import KeyValueTable from '../components/KeyValueTable';
import { editEntry } from '../actions';

const getContainsFunc = word => {
  word = word && word.toLowerCase();

  return entry => {
    let key = entry.key && entry.key.toLowerCase();
    let value = entry.value && entry.value.toLowerCase();

    return key.indexOf(word) > -1 || value.indexOf(word) > -1;
  };
};

const isEntryBeingEdited = editIndex => {
  return entry => {
    return editIndex === null || entry.index !== editIndex;
  };
};

const addIndex = (entry, idx) => {
  return {...entry, index: idx}
};

const mapStateToProps = state => {
  let searchText = state.search.trim();
  let entries = state.entries.map(addIndex);

  if (state.editor.index !== null) {
    entries = entries.filter(isEntryBeingEdited(state.editor.index));
  }

  if (searchText) {
    entries = entries.filter(getContainsFunc(searchText));
  }

  return {
    entries: entries.reverse()
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    rowDoubleClickHandler: (...args) => {
      dispatch(editEntry(...args));
    }
  };
};

const EntryTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyValueTable);

export default EntryTable;
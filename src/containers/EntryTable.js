import { connect } from 'react-redux';
import KeyValueTable from '../components/KeyValueTable';
import { editEntry } from '../actions';

const getContainsFunc = word => {
  word = word && word.toLowerCase();

  return (entry) => {
    let key = entry.key && entry.key.toLowerCase();
    let value = entry.value && entry.value.toLowerCase();

    return key.indexOf(word) > -1 || value.indexOf(word) > -1;
  };
};

const mapStateToProps = state => {
  let search = state.search.trim();
  let entries = state.entries.map((entry, idx) => {
    return {...entry, index: idx}
  });

  return {
    entries: search
      ? entries.filter(getContainsFunc(search)).reverse()
      : entries.reverse()
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
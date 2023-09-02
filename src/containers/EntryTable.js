import { connect } from 'react-redux';
import KeyValueTable from '../components/KeyValueTable';
import { editEntry } from '../actions';
import { mapEntries as mapStateToProps } from '../utils/mapEntries';

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

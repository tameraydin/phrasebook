import { connect } from 'react-redux';
import KeyValueTable from '../components/KeyValueTable';
import { SEARCH } from '../constants/AppModes';

const mapStateToProps = state => {
  return {
    entries: state.entries,
    showEditor: state.mode !== SEARCH
  };
};

const EntryTable = connect(
  mapStateToProps
)(KeyValueTable);

export default EntryTable;
import { connect } from 'react-redux';
import EventfulInput from '../components/EventfulInput';
import { SEARCH } from '../constants/AppModes';
import { searchEntry, addEntry } from '../actions'

const mapStateToProps = state => {
  return {
    value: state.search,
    disabled: state.mode !== SEARCH
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: text => {
      dispatch(searchEntry(text));
    },
    submitHandler: text => {
      dispatch(addEntry(text));
    }
  };
};

const InputBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventfulInput);

export default InputBar;
import { connect } from 'react-redux';
import EventfulInput from '../components/EventfulInput';
import { SEARCH } from '../constants/AppModes';
import { searchEntry, addEntry } from '../actions'

const mapStateToProps = state => {
  return {
    value: state.search,
    disabled: state.mode !== SEARCH,
    focusOnInit: true
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: value => {
      dispatch(searchEntry(value));
    },
    submitHandler: value => {
      dispatch(addEntry(value));
    }
  };
};

const InputBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventfulInput);

export default InputBar;
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';

const mapStateToProps = state => {
  return {
    className: 'full-height mode--' + state.mode
  };
};

const EntryTableContainer = connect(
  mapStateToProps
)(Wrapper);

export default EntryTableContainer;
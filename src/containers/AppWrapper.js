import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';

const APP_CLASS = 'phrasebook';

const mapStateToProps = state => {
  return {
    className: APP_CLASS + ' ' + APP_CLASS + '--' + state.mode
  };
};

const EntryTableContainer = connect(
  mapStateToProps
)(Wrapper);

export default EntryTableContainer;
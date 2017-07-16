import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wrapper extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    className: 'full-height mode--' + state.mode
  };
};

const WrapperContainer = connect(
  mapStateToProps
)(Wrapper);

export default WrapperContainer;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Wrapper extends Component {
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
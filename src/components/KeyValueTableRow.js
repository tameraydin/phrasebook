import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class KeyValueTableRow extends Component {
  static propTypes = {
    rowKey: PropTypes.string.isRequired,
    rowValue: PropTypes.string.isRequired
  }

  render() {
    return (
      <tr>
        <td>{this.props.rowKey}</td>
        <td>{this.props.rowValue}</td>
      </tr>
    );
  }
};
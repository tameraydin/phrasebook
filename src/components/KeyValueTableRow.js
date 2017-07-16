import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class KeyValueTableRow extends Component {
  static propTypes = {
    rowIdentificator: PropTypes.number.isRequired,
    rowKey: PropTypes.string.isRequired,
    rowValue: PropTypes.string.isRequired
  }

  render() {
    return (
      <tr data-id={this.props.rowIdentificator}>
        <td>{this.props.rowKey}</td>
        <td>{this.props.rowValue}</td>
      </tr>
    );
  }
};
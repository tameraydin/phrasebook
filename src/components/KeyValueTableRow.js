import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class KeyValueTableRow extends Component {
  static propTypes = {
    rowIdentificator: PropTypes.number.isRequired,
    rowKey: PropTypes.string.isRequired,
    rowValue: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <tr data-id={this.props.rowIdentificator} title={this.props.title}>
        <td>{this.props.rowKey}</td>
        <td>{this.props.rowValue}</td>
      </tr>
    );
  }
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PhraseRow extends Component {
  static propTypes = {
    firstCellText: PropTypes.string.isRequired,
    secondCellText: PropTypes.string.isRequired
  }

  render() {
    return (
      <tr>
        <td>{this.props.firstCellText}</td>
        <td>{this.props.secondCellText}</td>
      </tr>
    );
  }
};
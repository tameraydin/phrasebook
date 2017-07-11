import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventfulInput from '../components/EventfulInput';

export default class KeyValueTableRow extends Component {
  static propTypes = {
    rowKey: PropTypes.string.isRequired,
    rowValue: PropTypes.string.isRequired,
    edit: PropTypes.bool
  }

  render() {
    let firstCell = this.props.edit
      ? (
          <td className="cell-with-input">
            <EventfulInput
                type='textarea'
                focusOnInit={true}
                value={this.props.rowKey} />
          </td>
        )
      : (
          <td>
            {this.props.rowKey}
          </td>
        );

    let secondCell = this.props.edit
      ? (
          <td className="cell-with-input">
            <EventfulInput
                type='textarea'
                placeholder='Click here and start typing...'
                value={this.props.rowValue} />
          </td>)
      : (
          <td>
            {this.props.rowValue}
          </td>
        );

    return (
      <tr>
        {firstCell}
        {secondCell}
      </tr>
    );
  }
};
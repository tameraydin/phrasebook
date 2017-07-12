import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyValueTableRow from './KeyValueTableRow';

export default class KeyValueTable extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired
  }

  render() {
    if (!this.props.entries.length) {
      return (<small>¯\_(ツ)_/¯</small>);
    }

    return (
      <table>
        <tbody>
          {this.props.entries.map((entry, index) =>
            <KeyValueTableRow
                key={index}
                rowKey={entry.key}
                rowValue={entry.value} />
          )}
        </tbody>
      </table>
    );
  }
};
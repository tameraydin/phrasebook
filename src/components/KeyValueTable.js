import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyValueTableRow from './KeyValueTableRow';

export default class KeyValueTable extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    showEditor: PropTypes.bool.isRequired
  }

  render() {
    let editRow = this.props.showEditor
      ? (<KeyValueTableRow
            rowKey={'TODO'}
            rowValue={''}
            edit={true} />)
      : null;

    return (
      <table>
        <tbody>
          {editRow}
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
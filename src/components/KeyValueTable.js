import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyValueTableRow from './KeyValueTableRow';

export default class KeyValueTable extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    rowDoubleClickHandler: PropTypes.func.isRequired
  }

  onDoubleClick(event) {
    let target = event.target;
    let nextEl = target.nextSibling;
    let firstCell, secondCell;

    if (target.tagName !== 'TD' ) {
      if (target.tagName === 'TR') {
        target = target.children[0];
      } else {
        return;
      }
    }

    if (nextEl) {
      firstCell = target.innerHTML.trim();
      secondCell = nextEl.innerHTML.trim();
    } else {
      firstCell = target.previousSibling.innerHTML.trim();
      secondCell = target.innerHTML.trim();
    }

    let row = target.parentNode;
    this.props.rowDoubleClickHandler(firstCell, secondCell, row.dataset.id);
  }

  render() {
    if (!this.props.entries.length) {
      return (<small>¯\_(ツ)_/¯</small>);
    }

    return (
      <table onDoubleClick={this.onDoubleClick.bind(this)}>
        <tbody>
          {this.props.entries.map((entry, index) =>
            <KeyValueTableRow
                key={index}
                rowIdentificator={entry.index}
                rowKey={entry.key}
                rowValue={entry.value} />
          )}
        </tbody>
      </table>
    );
  }
};
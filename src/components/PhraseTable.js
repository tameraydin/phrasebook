import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhraseRow from './PhraseRow';

export default class PhraseTable extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.entries.map((entry, index) =>
            <PhraseRow
                key={index}
                firstCellText={entry._lang_1}
                secondCellText={entry._lang_2} />
          )}
        </tbody>
      </table>
    );
  }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextBar extends Component {
  static propTypes = {
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired
  }

  render() {
    return (
      <div class="status">
        <spann dangerouslySetInnerHTML={{__html: this.props.left}} />
        <span dangerouslySetInnerHTML={{__html: this.props.right}} />
      </div>
    );
  }
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EventfulInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    changeHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.domEl.focus();
  }

  componentDidUpdate() {
    this.domEl.focus();
  }

  render() {
    return (
      <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          ref={(el) => { this.domEl = el; }}
          onChange={event => {
            this.props.changeHandler(event.target.value);
          }}
          onKeyUp={event => {
            if (event.keyCode === 13 && !event.shiftKey) {
              event.target.value &&
                this.props.submitHandler(event.target.value);
            }
          }} />
    );
  }
};

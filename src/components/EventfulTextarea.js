import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EventfulInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.string.isRequired,
    submitHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired,
    tabHandler: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool
  }

  static defaultProps = {
    autoFocus: false
  }

  componentDidMount() {
    this.props.autoFocus && this.field.focus();
  }

  render() {
    return (
      <textarea
          placeholder='Click here and start typing...'
          defaultValue={this.props.defaultValue}
          ref={(input) => { this.field = input; }}
          onKeyDown={event => {
            if ((event.keyCode === 13 || event.keyCode === 9)
                && !event.shiftKey) {
              event.preventDefault();
            }
          }}
          onKeyUp={event => {
            if (event.keyCode === 13 && !event.shiftKey) {
              event.preventDefault();
              this.props.submitHandler(event.target, event.target.value);
            } else if (event.keyCode === 9 && !event.shiftKey) {
              this.props.tabHandler(event.target);
            } else if (event.keyCode === 27) {
              this.props.cancelHandler();
            }
          }}>
      </textarea>
    );
  }
};
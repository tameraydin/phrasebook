import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EventfulInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['input', 'textarea']),
    disabled: PropTypes.bool,
    focusOnInit: PropTypes.bool,
    placeholder: PropTypes.string,
    clickHandler: PropTypes.func,
    changeHandler: PropTypes.func,
    submitHandler: PropTypes.func,
    cancelHandler: PropTypes.func
  }

  static defaultProps = {
    type: 'input',
    disabled: false,
    focusOnInit: false
  }

  componentDidMount() {
    this.props.focusOnInit && this.field.focus();
  }

  render() {
    let TagName = `${this.props.type}`;

    return (
      <TagName
          type='text'
          value={this.props.value}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          ref={(input) => { this.field = input; }}
          onClick={event => {
            this.props.clickHandler &&
              this.props.clickHandler(event.target.value);
          }}
          onChange={event => {
            this.props.changeHandler &&
              this.props.changeHandler(event.target.value);
          }}
          onKeyUp={event => {
            if (event.keyCode === 13) {
              this.props.submitHandler &&
                this.props.submitHandler(event.target.value);
            } else if (event.keyCode === 27) {
              this.props.cancelHandler &&
                this.props.cancelHandler(event.target.value);
            }
          }} />
    );
  }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EventfulInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value
    };
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    submitHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired,
    tabHandler: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool
  }

  static defaultProps = {
    autoFocus: false
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  componentDidMount() {
    this.props.autoFocus && this.domEl.focus();
  }

  render() {
    return (
      <textarea
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          placeholder={this.props.placeholder}
          ref={(el) => { this.domEl = el; }}
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

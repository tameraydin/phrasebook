import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventfulTextarea from './EventfulTextarea';

export default class KeyValueEditor extends Component {
  static propTypes = {
    keyText: PropTypes.string.isRequired,
    valueText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    submitHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  submitHandler(el, value) {
    value = value.trim();

    let otherField = el.isEqualNode(this.keyDomEl)
      ? this.valueDomEl
      : this.keyDomEl;

    if (value) {
      if (otherField.value.trim()) {
        return this.props.submitHandler(
          this.keyDomEl.value.trim(),
          this.valueDomEl.value.trim());
      } else {
        return otherField.focus();
      }
    }

    !otherField.value.trim() && otherField.focus();
  }

  tabHandler(el) {
    if (el.isEqualNode(this.keyDomEl)) {
      this.valueDomEl.focus();
    } else {
      this.keyDomEl.focus();
    }
  }

  render() {
    return (
      <div className="flex">
        <EventfulTextarea
            autoFocus={true}
            value={this.props.keyText}
            placeholder={this.props.placeholder}
            ref={(comp) => { this.keyDomEl = comp && comp.domEl; }}
            tabHandler={this.tabHandler.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            cancelHandler={this.props.cancelHandler} />
        <EventfulTextarea
            value={this.props.valueText}
            placeholder={this.props.placeholder}
            ref={(comp) => { this.valueDomEl = comp && comp.domEl; }}
            tabHandler={this.tabHandler.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            cancelHandler={this.props.cancelHandler} />
      </div>
    );
  }
};

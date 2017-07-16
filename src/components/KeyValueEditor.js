import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventfulTextarea from './EventfulTextarea';

export default class KeyValueEditor extends Component {
  static propTypes = {
    keyText: PropTypes.string.isRequired,
    valueText: PropTypes.string.isRequired,
    submitHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired
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
            ref={(comp) => { this.keyDomEl = comp && comp.domEl; }}
            defaultValue={this.props.keyText}
            tabHandler={this.tabHandler.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            cancelHandler={this.props.cancelHandler}
            autoFocus={true} />
        <EventfulTextarea
            ref={(comp) => { this.valueDomEl = comp && comp.domEl; }}
            tabHandler={this.tabHandler.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            cancelHandler={this.props.cancelHandler}
            defaultValue={this.props.valueText} />
      </div>
    );
  }
};
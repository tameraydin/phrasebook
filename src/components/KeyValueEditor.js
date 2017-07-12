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

    let otherField = el.isEqualNode(this.keyField)
      ? this.valueField
      : this.keyField;

    if (value) {
      if (otherField.value.trim()) {
        return this.props.submitHandler(
          this.keyField.value.trim(),
          this.valueField.value.trim());
      } else {
        return otherField.focus();
      }
    }

    !otherField.value.trim() && otherField.focus();
  }

  tabHandler(el) {
    if (el.isEqualNode(this.keyField)) {
      this.valueField.focus();
    } else {
      this.keyField.focus();
    }
  }

  render() {
    return (
      <div>
        <EventfulTextarea
            ref={(el) => { this.keyField = el && el.field; }}
            defaultValue={this.props.keyText}
            tabHandler={this.tabHandler.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            cancelHandler={this.props.cancelHandler}
            autoFocus={true} />
        <EventfulTextarea
            ref={(el) => { this.valueField = el && el.field; }}
            tabHandler={this.tabHandler.bind(this)}
            submitHandler={this.submitHandler.bind(this)}
            cancelHandler={this.props.cancelHandler}
            defaultValue={this.props.valueText} />
      </div>
    );
  }
};
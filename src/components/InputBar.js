import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputBar extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue="" />
        {/*
          <button className="button">{'\u21C4'}</button>
          <button className="button">{'\u270D'}</button>
          <button className="button">{'\u002B'}</button>
          <button className="button">{'\u2A2F'}</button>
        */}
      </div>
    );
  }
};
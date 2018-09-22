import React from 'react';
import { Button } from '@material-ui/core';
import TextBox from '../textbox/textbox-sfc';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    SearchBox.instance = this;

    this.listeners = {};
    this.state = {
      value: '',
    };
  }

  static addListener = (name, listener) => {
    SearchBox.instance.listeners[name] = listener;
  };

  static removeListener = (name) => {
    delete SearchBox.instance.listeners[name];
  };

  onChange = (value) => {
    this.setState({ value: value });
  };

  onSearch = () => {
    for (const listener in this.listeners) this.listeners[listener](this.state.value);
  };

  render() {
    return (
      <React.Fragment>
        <TextBox value={this.state.value} onChange={this.onChange} />
        <Button onClick={this.onSearch}>Search</Button>
      </React.Fragment>
    );
  }
}
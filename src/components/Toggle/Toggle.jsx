// @flow
import React, { Component } from 'react';

/**
 * @visibleName Toggle
 */
export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { on: false }
  }

  toggle = () =>
    this.setState(prevState =>
      ({ on: !prevState.on }));

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: this.toggle
    });
  }
}

// @flow
import React, { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type propTypes = { children: Node }

export default class GetMeasure extends Component<propTypes> {
  myObserver = new ResizeObserver((element) => {
    this.setState({ size: element[0].target.getBoundingClientRect() });
  });

  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { size: {} };
  }

  componentDidMount() {
    this.ismounted = true;
    if (this.ismounted) {
      this.myObserver.observe(this.ref.current);
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
  }

  render() {
    const { children } = this.props;
    const { size } = this.state;

    return children({
      size,
      ref: this.ref,
    });
  }
}

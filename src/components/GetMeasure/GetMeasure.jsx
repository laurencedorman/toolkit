// @flow
import React, { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type propTypes = { children: Node }

export default class GetMeasure extends Component<propTypes> {
  myObserver = new ResizeObserver((element) => {
    if (this.ismounted && element) {
      this.setState({
        size: element[0].target.getBoundingClientRect(),
      });
    }
  });

  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { size: {} };
  }

  componentDidMount() {
    this.ismounted = true;
    if (this.ismounted) {
      this.animate();
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
    this.myObserver.unobserve(this.ref.current);
  }

  animate = () => {
    this.myObserver.observe(this.ref.current);
    window.requestAnimationFrame(() => this.animate);
  };

  render() {
    const { children } = this.props;
    const { size } = this.state;

    return children({
      size: size !== null && size,
      ref: this.ref,
    });
  }
}

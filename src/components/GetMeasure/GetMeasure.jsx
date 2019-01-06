// @flow
import { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type propTypes = { children: Node }

export default class GetMeasure extends Component<propTypes> {
  myObserver = new ResizeObserver((el) => {
    this.setState({ size: el[0].target.getBoundingClientRect() });
  });

  constructor(props) {
    super(props);
    this.state = { size: {} };
  }

  componentDidMount() {
    this.myObserver.observe(this.el);
  }

  componentWillUnmount() {
    this.myObserver.unobserve(this.el);
  }

  render() {
    const { children } = this.props;
    const { size } = this.state;

    return children({
      size,
      ref: (el) => { this.el = el; },
    });
  }
}

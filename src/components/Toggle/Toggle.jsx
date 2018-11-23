// @flow
import { Component } from 'react';

/**
 * @visibleName Toggle
 */
type propTypes = {
  children: Node,
}

export default class Toggle extends Component<propTypes> {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  toggle = () => this.setState(prevState => ({ on: !prevState.on }));

  toggleIn = () => this.setState({ on: true });

  toggleOut = () => this.setState({ on: false });

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: this.toggle,
      toggleIn: this.toggleIn,
      toggleOut: this.toggleOut,
    });
  }
}

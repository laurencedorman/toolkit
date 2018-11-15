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

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: this.toggle,
    });
  }
}

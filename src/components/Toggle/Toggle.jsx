// @flow
import { Component } from 'react';

/**
 * @visibleName Toggle
 */
type propTypes = { children: Node }

export default class Toggle extends Component<propTypes> {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = (e) => {
    const { on } = this.state;
    /* eslint-disable */
    const keys = {
      Escape: () => {
        e.preventDefault();
        !on
          ? e.stopPropagation()
          : this.toggle();
      },
    };
    /* eslint-enable */
    if (keys[e.key]) keys[e.key]();
  };

  toggle = () => this.setState(prevState => ({ on: !prevState.on }));

  toggleIn = () => this.setState({ on: true });

  toggleOut = () => this.setState({ on: false });

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: e => this.toggle(e),
      toggleIn: e => this.toggleIn(e),
      toggleOut: e => this.toggleOut(e),
    });
  }
}

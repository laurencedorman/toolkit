import { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * @visibleName Toggle
 */
export default class Toggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  componentDidMount() {
    this.ismounted = true;
    if (this.ismounted) {
      document.addEventListener('keydown', this.handleKey);
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = (e) => {
    const { on } = this.state;
    /* eslint-disable */
    if (this.ismounted) {
      const keys = {
        Escape: () => {
          e.preventDefault();
          !on
            ? e.stopPropagation()
            : this.toggle();
        },
      };
      if (keys[e.key]) keys[e.key]();
    }
    /* eslint-enable */
  };

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

Toggle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

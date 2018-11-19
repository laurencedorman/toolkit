// @flow
import React, { Component } from 'react';
import { Spring, animated, config } from 'react-spring';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
type propTypes = {
  on: boolean,
  children: string | Node,
};

class ToggleDown extends Component<propTypes> {
  constructor(props) {
    super(props);
    this.toggleDown = React.createRef();
    this.state = { height: 0 };
  }

  componentDidMount() {
    if (!this.toggleDown) return;

    this.setState({
      height: this.toggleDown.current.offsetHeight,
    });

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      height: this.toggleDown.current.offsetHeight,
    });
  };

  render() {
    const { on, children } = this.props;
    const { height } = this.state;

    return (
      <Spring
        force
        config={{ ...config.default, precision: 1 }}
        from={{ height: 0 }}
        to={{ height: on ? height : 0 }}
      >
        {style => (
          <animated.div
            className={styles.toggleDown}
            style={style}
          >
            <animated.div ref={this.toggleDown}>
              {children}
            </animated.div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default ToggleDown;

// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
type propTypes = {
  on: boolean,
  children: string | Node,
  className?: string,
  style?: Object,
};

class ToggleDown extends PureComponent<propTypes> {
  static defaultProps = {
    className: '',
    style: {},
  };

  constructor(props) {
    super(props);
    this.toggleDown = React.createRef();
    this.state = { height: 0 };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    if (!this.toggleDown) return;

    setTimeout(() => {
      this.setState({ height: this.toggleDown.current.offsetHeight });
    }, 1000);

    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = () => {
    this.setState({
      height: this.toggleDown.current.offsetHeight,
    });
  };

  render() {
    const {
      on, children, className, style,
    } = this.props;

    const { height } = this.state;

    const classNames = cn(
      styles.toggleDown,
      className,
    );

    return (
      <Spring
        force
        config={{
          tension: 280, friction: 15, mass: 0.2, precision: 1,
        }}
        from={{ height: 0 }}
        to={{ height: on ? height : 0 }}
      >
        {customStyle => (
          <animated.div
            className={classNames}
            style={{
              ...customStyle,
              ...style,
            }}
          >
            <div ref={this.toggleDown}>
              {children}
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default ToggleDown;

// @flow
import React, { PureComponent } from 'react';
import { Spring, animated, config } from 'react-spring';
import cn from 'classnames';
import styles from './ToggleDown.module.scss';

/**
 * @visibleName ToggleDown
 */
type propTypes = {
  on: boolean,
  children: string | Node,
  className?: string,
};

class ToggleDown extends PureComponent<propTypes> {
  static defaultProps = { className: '' };

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
    const { on, children, className } = this.props;
    const { height } = this.state;

    const classNames = cn(
      styles.toggleDown,
      className,
    );

    return (
      <Spring
        force
        config={{ ...config.default, precision: 1 }}
        from={{ height: 0 }}
        to={{ height: on ? height + 16 : 0 }}
      >
        {style => (
          <animated.div
            className={classNames}
            style={style}
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

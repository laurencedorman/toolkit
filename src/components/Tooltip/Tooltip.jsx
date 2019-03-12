// @flow
import React, { PureComponent } from 'react';
import { Transition, animated } from 'react-spring';
import cn from 'classnames';

import { Portal, Toggle } from 'components';
import tooltipPosition from './TooltipPosition';

import styles from './Tooltip.module.scss';

let addTooltipPosition = {};

type propTypes = {
  children: string | Node | () => void,
  content: string | Node | () => void,
  position?: 'top' | 'right' | 'bottom' | 'left',
  className?: string,
  bgColor?: string,
  dataQa?: string,
};

/* eslint-disable */
export default class Tooltip extends PureComponent<propTypes> {
  static defaultProps = {
    position: 'top',
    className: '',
    bgColor: '#0c193a',
    dataQa: '',
  };

  constructor(props) {
    super(props);
    this.transmitter = React.createRef();
    this.state = { measure: {} };
  }

  componentDidMount() {
    this.getPosition();
    window.addEventListener('scroll', () => {
      window.requestAnimationFrame(() => {
        this.getPosition();
      });
    });
  };

  getPosition = () => {
    if (this.transmitter.current) {
      this.setState({
        measure: this.transmitter.current.getBoundingClientRect(),
      })
    }
  };

  handleMouseEnter = (e, toggleIn) => {
    const { position } = this.props;
    const { measure } = this.state;

    if (this.transmitter.current) {
      addTooltipPosition = tooltipPosition(measure, position);
    }
    toggleIn();
  };

  render() {
    const { children, className, dataQa, content, bgColor } = this.props;

    const classNames = cn(
      styles.transmitter,
      className,
    );

    return (
      <Toggle>
        {({ on, toggleIn, toggleOut }) => (
          <>
            <span
              className={classNames}
              onMouseEnter={e => this.handleMouseEnter(e, toggleIn)}
              onMouseLeave={toggleOut}
              onWheel={toggleOut}
              ref={this.transmitter}
              role="button"
              data-qa={dataQa}
            >
              {children}
            </span>
            {renderTooltip(on, content, bgColor)}
          </>
        )}
      </Toggle>
    );
  }
}

const renderTooltip = (display, content, bgColor) => (
  <Portal>
    <Transition
      native
      unique
      config={{ tension: 320, friction: 23, mass: 0.6, precision: 1 }}
      items={display}
      from={{ o: 0, s: 0.6 }}
      enter={{ o: 1.01, s: 1 }}
      leave={{ o: 0, s: 0.6 }}
    >
      {display => display
        ? (
          ({ o, s }) => (
            <div
              className={styles.tooltip}
              style={addTooltipPosition.style}
            >
              <div className={styles[addTooltipPosition.class]}>
                <animated.div
                  style={{
                    opacity: o.interpolate(o => o),
                    transform: s.interpolate(s => `scale(${s})`),
                    backgroundColor: bgColor,
                    color: '#fff',
                  }}
                >
                  <div className={styles.svg}>
                    <svg viewBox="0 0 18.39 7.96" width="16" height="16">
                      <path d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z" fill={bgColor} />
                    </svg>
                  </div>
                  <div className={styles.content}>
                    {renderContent(content, styles.spanContent)}
                  </div>
                </animated.div>
              </div>
            </div>
          )
        )
        : () => null
      }
    </Transition>
  </Portal>
);


const renderContent = (content, className) => (
  typeof content === 'string'
    ? <span className={className}>{content}</span>
    : typeof content === 'function'
      ? content()
      : null
);
/* eslint-enable */

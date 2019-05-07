/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import cn from 'classnames';

import Portal from '../Portal';
import Toggle from '../Toggle';
import tooltipPosition from './TooltipPosition';

import styles from './Tooltip.module.scss';

let addTooltipPosition = {};

export default class Tooltip extends PureComponent {
  static defaultProps = {
    position: 'top',
    className: '',
    bgColor: '#0c193a',
    dataQa: '',
  };

  constructor(props) {
    super(props);
    this.transmitter = React.createRef();
  }

  handleMouseEnter = (e, toggleIn) => {
    const { position } = this.props;
    if (this.transmitter.current) {
      addTooltipPosition = tooltipPosition(this.transmitter.current, position);
    }
    toggleIn();
  };

  render() {
    const { children, className, dataQa, content, bgColor } = this.props;

    const classNames = cn(styles.transmitter, className);

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

const renderTooltip = (display, content, bgColor) => {
  return (
    <Portal>
      <Transition
        native
        unique
        config={{ tension: 350, friction: 23, mass: 0.6, precision: 0.1 }}
        items={display}
        from={{ o: 0, s: 0.6 }}
        enter={{ o: 1, s: 1 }}
        leave={{ o: 0, s: 0.6 }}
      >
        {display =>
          display
            ? ({ o, s }) => (
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18.39 7.96"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z"
                            fill={bgColor}
                          />
                        </svg>
                      </div>
                      <div className={styles.content}>
                        {renderContent(content, styles.spanContent)}
                      </div>
                    </animated.div>
                  </div>
                </div>
              )
            : () => null
        }
      </Transition>
    </Portal>
  );
};

const renderContent = (content, className) =>
  typeof content === 'string' ? (
    <span className={className}>{content}</span>
  ) : typeof content === 'function' ? (
    content()
  ) : null;

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  className: PropTypes.string,
  bgColor: PropTypes.string,
  dataQa: PropTypes.string,
};

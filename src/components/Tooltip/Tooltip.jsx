// @flow
import React, { Fragment, PureComponent } from 'react';
import {
  Transition, animated, interpolate, config,
} from 'react-spring';
import Portal from '../Portal';
import { tooltipPosition } from './TooltipPosition';
import styles from './Tooltip.module.scss';

let addTooltipPosition;

type propTypes = {
  children: string | Node | () => void,
  content: string | Node,
  position?: 'top' | 'right' | 'bottom' | 'left',
};

export default class Tooltip extends PureComponent<propTypes> {
  static defaultProps = { position: 'top' };

  constructor(props) {
    super(props);
    this.transmitter = React.createRef();
  }

  renderTooltip = (display) => {
    const { content, position } = this.props;

    if (this.transmitter.current) {
      addTooltipPosition = tooltipPosition(this.transmitter.current, position);
    }
    /* eslint-disable */
    return (
      <Portal>
        <Transition
          native
          config={config.wobbly}
          items={display}
          from={{ o: 0.01, s: 0.6, y: '-20px' }}
          enter={{ o: 1, s: 1, y: '0px' }}
          leave={{ o: 0.01, s: 0.6, y: '20px' }}
        >
          {display => display
            && (
              ({ o, s, y}) => (
                <div
                  className={styles.tooltip}
                  style={addTooltipPosition.style}
                >
                  <animated.div
                    id="tooltip-content"
                    className={styles[addTooltipPosition.class]}
                  >
                    <animated.div
                      style={{
                        opacity: o.interpolate(o => o),
                        transform: interpolate(
                          [s, y],
                          (s, y) => `scale(${s}) translate3d(0, ${y}, 0)`
                        )
                      }}
                    >
                      {renderArrow()}
                      <span className={styles.span}>
                         {content}
                      </span>
                    </animated.div>
                  </animated.div>
                </div>
              )
            )
          }
        </Transition>
      </Portal>
    );
    /* eslint-disable */
  };

  render() {
    const { children } = this.props;

    /* eslint-disable */
    return (
      <Toggle>
        {({ on, toggleIn, toggleOut }) => (
          <Fragment>
            <span
              className={styles.transmitter}
              onMouseEnter={toggleIn}
              onMouseLeave={toggleOut}
              onFocus={toggleIn}
              onBlur={toggleOut}
              ref={this.transmitter}
              role="button"
              aria-describedby="tooltip-content"
            >
              {children}
            </span>
            {this.renderTooltip(on)}
          </Fragment>
        )}
      </Toggle>
    );
    /* eslint-disable */
  }
};

const renderArrow = () =>
  <animated.div className={styles.svg}>
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 18.39 7.96"
         width="16"
         height="16"
    >
      <path d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z" />
    </svg>
  </animated.div>;

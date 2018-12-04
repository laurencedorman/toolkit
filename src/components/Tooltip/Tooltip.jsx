// @flow
import React, { Fragment, PureComponent } from 'react';
import {
  Transition, animated,
} from 'react-spring';
import cn from 'classnames';

import { Portal, Toggle } from 'components';
import { tooltipPosition } from './TooltipPosition';

import styles from './Tooltip.module.scss';

let addTooltipPosition;

type propTypes = {
  children: string | Node | () => void,
  content: string | Node,
  position?: 'top' | 'right' | 'bottom' | 'left',
  className?: string,
};

export default class Tooltip extends PureComponent<propTypes> {
  static defaultProps = {
    position: 'top',
    className: '',
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

  renderTooltip = (display) => {
    const { content } = this.props;

    /* eslint-disable */
    return (
      <Portal>
        <Transition
          native
          unique
          key={display}
          config={{ tension: 250, friction: 20, mass: 0.2 }}
          items={display}
          from={{ o: 0, s: 0.6 }}
          enter={{ o: 1, s: 1 }}
          leave={{ o: 0, s: 0.6 }}
        >
          {display => display
            && (
              ({ o, s }) => (
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
                        transform: s.interpolate(s => `scale(${s})`),
                      }}
                    >
                      <div className={styles.svg}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 18.39 7.96"
                             width="16"
                             height="16"
                        >
                          <path d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z" />
                        </svg>
                      </div>
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
    /* eslint-enable */
  };

  render() {
    const { children, className } = this.props;

    const classNames = cn(
      styles.transmitter,
      className,
    );

    /* eslint-disable */
    return (
      <Toggle>
        {({ on, toggleIn, toggleOut }) => (
          <Fragment>
            <span
              className={classNames}
              onMouseEnter={e => this.handleMouseEnter(e, toggleIn)}
              onMouseLeave={toggleOut}
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
    /* eslint-enable */
  }
}

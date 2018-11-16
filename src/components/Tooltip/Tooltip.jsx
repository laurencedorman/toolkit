// @flow
import React, { Fragment, PureComponent } from 'react';
// import { Transition, animated } from 'react-spring';
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

    return (
      <Portal>
        {display
          && (
            <div className={styles.tooltip} style={addTooltipPosition.style}>
              <div
                id="tooltip-content"
                className={styles[addTooltipPosition.class]}
              >
                {renderArrow()}
                {content}
              </div>
            </div>
          )
        }
      </Portal>
    );
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
  <div className={styles.svg}>
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 18.39 7.96"
         width="16"
         height="16"
    >
      <path d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z" />
    </svg>
  </div>;

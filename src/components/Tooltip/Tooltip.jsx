// @flow
import React, { Fragment, PureComponent } from 'react';
import { tooltipPosition } from './TooltipPosition';
import styles from './Tooltip.module.scss';

type propTypes = {
  children: string | Node,
  content: string | Node,
  position?: 'top' | 'right' | 'bottom' | 'left',
};

export default class Tooltip extends PureComponent<propTypes> {
  static defaultProps = { position: 'top' };

  constructor(props) {
    super(props);
    this.state = { active: false };
    this.transmitter = React.createRef();
  }

  handleShow = () => this.setState({ active: true });

  handleHide = () => this.setState({ active: false });

  renderTooltip = () => {
    const { content, position } = this.props;
    const { active } = this.state;
    let addTooltipPosition;

    if (this.transmitter.current) {
      addTooltipPosition = tooltipPosition(this.transmitter.current, position);
    }

    return (
      <Fragment>
        {active && (
          <div className={styles.portals} style={addTooltipPosition.style}>
            <div id="tooltip-content" className={styles[addTooltipPosition.class]}>
              <div className={styles.svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.39 7.96" width="16" height="16">
                  <path d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z" />
                </svg>
              </div>
              {content}
            </div>
          </div>
        )}
      </Fragment>
    );
  };

  render() {
    const { children } = this.props;
    console.log(this.transmitter.current);


    /* eslint-disable */
    return (
      <Fragment>
        <span
          className={styles.tooltip}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          onFocus={this.handleShow}
          onBlur={this.handleHide}
          ref={this.transmitter}
          role="button"
          aria-describedby="tooltip-content"
        >
          {children}
        </span>
        {this.renderTooltip()}
      </Fragment>
    );
    /* eslint-disable */
  }
}

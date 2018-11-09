// @flowimport React, { Fragment, PureComponent } from 'react';import ReactDOM from 'react-dom';import { Transition } from 'react-transition-group';import { tooltipPosition } from './TooltipPosition';import styles from './Tooltip.module.scss';type propTypes = {  children: string | Node,  content: string | Node,  position?: 'top' | 'right' | 'bottom' | 'left',};export default class Tooltip extends PureComponent<propTypes> {  static defaultProps = { position: 'top' };  constructor(props) {    super(props);    this.state = { active: false };    this.transmitter = React.createRef();  }  handleShow = () => this.setState({ active: true });  handleHide = () => this.setState({ active: false });  renderTooltip = () => {    const { content, position } = this.props;    const { active } = this.state;    if (active) {      const addTooltipPosition = tooltipPosition(this.transmitter.current, position);      return ReactDOM.createPortal(        <div className={styles.portals} style={addTooltipPosition.style}>          <div id="tooltip-content" className={styles[addTooltipPosition.class]}>            <div className={styles.svg}>              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.39 7.96" width="16" height="16">                <path d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z" />              </svg>            </div>            {content}          </div>        </div>,        document.getElementById('root'),      )    }    return null;  };  render() {    const { children, position } = this.props;    return (      <Fragment>        <span          position={position}          className={styles.tooltip}          onMouseEnter={this.handleShow}          onMouseLeave={this.handleHide}          onFocus={this.handleShow}          onBlur={this.handleHide}          ref={this.transmitter}          role="button"          aria-describedby="tooltip-content"        >{children}</span>        {this.renderTooltip()}      </Fragment>    )  }}
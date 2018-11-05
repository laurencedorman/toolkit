// @flow
import React, { Fragment, PureComponent } from 'react';
// import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Icon from '../Icon';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
type propTypes = {
  children: string | Node,
  content: string,
  className: string,
};

export default class Modal extends PureComponent<propTypes> {
  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  handleKey = e => e.keyCode === 27 && this.setState({ active: false });
  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  renderModal = () => {
    const { content } = this.props;
    const { active } = this.state;

    return (
      <Transition in={active} timeout={300}>
        {state => (
          <div
            className={`${styles.modal} ${styles[state]}`}
            onClick={this.handleHide}
            onKeyPress={this.handleKey}>
            <div>
              <Icon
                name="close-circle"
                size="26"
                onClick={this.handleHide}
                className={styles.icon} />
              <p>{content}</p>
            </div>
          </div>
        )}
      </Transition>
    )
  };

  render() {
    const { children, className } = this.props;

    return(
      <Fragment>
        <div
          className={`${styles.trigger} ${className}`}
          onClick={this.handleShow}
        >{children}</div>
        {this.renderModal()}
      </Fragment>
    )
  }
}

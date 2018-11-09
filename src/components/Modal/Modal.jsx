// @flow
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
//import { CSSTransition } from 'react-transition-group';
import Animation from '../Animation';
import Icon from '../Icon';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
type propTypes = {
  open?: boolean,
  close?: () => void,
  transitionTime?: number,
  children: string | Node,
};

export default class Modal extends PureComponent<propTypes> {
  static defaultProps = {
    open: false,
    close: null,
    transitionTime: 300,
  };

  componentDidMount() {
    document.addEventListener('keydown',
      e => e.key === 'Escape' && this.props.close(), false
    );
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.close, false);
  };

  render() {
    const { children, open, close, transitionTime } = this.props;

    return(
      <Animation
        display={open}
        timeout={transitionTime}
        name="modal">
        <div onClick={close} className={styles.modal}>
          <Animation
            display={open}
            timeout={transitionTime}
            name="content">
            <div className={styles.content}>
              <Icon
                name="close-circle"
                size="26"
                onClick={close}
                className={styles.icon} />
              {children}
            </div>
          </Animation>
        </div>
      </Animation>
    )
  }
}

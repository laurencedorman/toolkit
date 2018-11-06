// @flow
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
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
    transitionTime: 150,
  };

  componentDidMount() {
    document.addEventListener('keydown',
      e => e.key === 'Escape' && this.props.close(), false
    );
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.close(), false);
  };

  render() {
    const { children, open, close, transitionTime } = this.props;

    return(
      <Transition
        appear
        in={open}
        timeout={transitionTime}>
        {state => {
          console.log(state);
          return(
            <div
              className={`${styles.modal} ${styles[state]}`}
              onClick={close}>
              <div>
                <Icon
                  name="close-circle"
                  size="26"
                  onClick={close}
                  className={styles.icon} />
                {children}
              </div>
            </div>
          )
        }}
      </Transition>
    )
  }
}

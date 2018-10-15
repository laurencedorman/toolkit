import React from 'react';
import { Transition } from 'react-transition-group';
import styles from './Alert.module.scss';

const Alert = ({ showAlert, transitionTime, theme, textAlert, closeButton, handleClose }: PropTypes) => (
  <Transition in={showAlert} timeout={transitionTime}>
    {state => (
      <div className={`${styles.manoolkitAlert} ${styles[state]}`} onClick={handleClose}>
        <div className={styles[theme]}>
          <button type="button" onClick={handleClose}>{closeButton}</button>
          <p>{textAlert}</p>
        </div>
      </div>
    )}
  </Transition>
);

type PropTypes = {
  showAlert?: boolean,
  transitionTime?: number,
  theme?: Array<'default', 'light', 'danger', 'hint'>,
  textAlert: string,
  handleClose: () => {},
  closeButton?: 'string',
};

Alert.defaultProps = {
  showAlert: false,
  transitionTime: 150,
  theme: 'default',
  closeButton: 'close',
};

export default Alert;

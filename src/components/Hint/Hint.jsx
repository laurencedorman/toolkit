// @flow
import React from 'react';
import styles from './Hint.module.scss';

const Hint = ({ showAlert, transitionTime, theme, textAlert }: PropTypes) => (
  <div className={`${styles.manoolkitAlert} ${styles[theme]}`}>
    <div className={styles.img}>
      <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
        <path d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M16,30 C23.7319865,30 30,23.7319865 30,16 C30,8.2680135 23.7319865,2 16,2 C8.2680135,2 2,8.2680135 2,16 C2,23.7319865 8.2680135,30 16,30 Z M16,21 C16.5522847,21 17,21.4477153 17,22 C17,22.5522847 16.5522847,23 16,23 C15.4477153,23 15,22.5522847 15,22 C15,21.4477153 15.4477153,21 16,21 Z M16,9 C16.5522847,9 17,9.44771525 17,10 L17,18 C17,18.5522847 16.5522847,19 16,19 C15.4477153,19 15,18.5522847 15,18 L15,10 C15,9.44771525 15.4477153,9 16,9 Z" />
      </svg>
    </div>
    <div>
      <p>{textAlert}</p>
    </div>
  </div>
);

type PropTypes = {
  theme?: Array<'default', 'light', 'danger', 'menthe'>,
  textAlert: string,
};

Hint.defaultProps = {
  theme: 'default',
};

export default Hint;

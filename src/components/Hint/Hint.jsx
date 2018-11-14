// @flow
import React from 'react';
import styles from './Hint.module.scss';
import Icon from '../Icon';

const Hint = ({
  theme, textAlert, icon, iconWidth,
}: PropTypes) => (
  <div className={`${styles.hint} ${styles[theme]}`}>
    <div className={styles.img}>
      <Icon name={icon} size={iconWidth} />
    </div>
    <div>
      <p>{textAlert}</p>
    </div>
  </div>
);

type PropTypes = {
  theme?: Array<'default', 'light', 'danger', 'menthe'>,
  textAlert: string,
  icon?: string,
  iconWidth?: number,
};

Hint.defaultProps = {
  theme: 'default',
  icon: 'alert-circle',
  iconWidth: 32,
};

export default Hint;

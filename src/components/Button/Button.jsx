// @flow
import React from 'react';
import cn from 'classnames';

import { Icon } from 'components';
import styles from './Button.module.scss';

/**
 * @visibleName Button
 */
const Button = ({
  children, size, theme, disabled, type, icon, reverse, onClick, dataQa, className, right,
}: propTypes) => {
  const classNames = cn(
    styles.button,
    styles[size],
    styles[theme],
    className,
    {
      [styles.icon]: icon,
      [styles.reverse]: reverse,
      [styles.onlyIcon]: !children,
      [styles.right]: right,
    },
  );

  /* eslint-disable react/button-has-type */
  return (
    <div className={styles.container}>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={classNames}
        data-qa={dataQa}
      >
        {icon
        && <Icon name={icon} size="16" />}
        {children && children}
      </button>
    </div>
  );
  /* eslint-enable react/button-has-type */
};

type propTypes = {
  children?: string | Node,
  theme?: 'default' | 'primary' | 'secondary',
  size?: 'big' | 'default' | 'small' | 'xsmall',
  type?: 'submit' | 'reset' | 'button' | 'menu',
  icon?: string,
  reverse?: boolean,
  disabled?: boolean,
  onClick?: () => void,
  dataQa?: string,
  className?: string,
  right?: boolean,
};

Button.defaultProps = {
  children: null,
  theme: 'default',
  size: 'default',
  type: 'button',
  icon: '',
  reverse: false,
  disabled: false,
  onClick: null,
  dataQa: '',
  className: '',
  right: false,
};

export default Button;

// @flow
import React from 'react';
import Icon from '../Icon';
import cn from 'classnames';
import styles from './Button.module.scss';

/**
 * @visibleName Button
 */
const Button = ({
  children, size, theme, disabled, type, icon, reverse, onClick, dataQa }: propTypes) => {
  const className = cn(
    styles.manoolkitButton,
    styles[size],
    styles[theme],
    {
      [styles.icon]: icon,
      [styles.reverse]: reverse,
      [styles.onlyIcon]: !children,
    }
  );

  return(
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={className}
      data-qa={dataQa}
    >
      {icon &&
      <Icon name={icon} size="16" />}
      {children && children}
    </button>
  );
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
};

export default Button;

// @flow
import React from 'react';
import cn from 'classnames';

import { Icon } from 'components';
import colors from '../../styles/colors';
import styles from './Button.module.scss';

/**
 * @visibleName Button
 */
const Button = React.forwardRef(({
  children,
  size,
  theme,
  disabled,
  type,
  icon,
  reverse,
  onClick,
  dataQa,
  className,
  style,
  title,
  fill,
  marginBottom,
}, ref:propTypes) => {
  const classNames = cn(
    styles.button,
    styles[size],
    styles[theme],
    {
      [styles.icon]: icon,
      [styles.reverse]: reverse,
      [styles.onlyIcon]: !children,
    },
    className,
  );

  /* eslint-disable no-nested-ternary */
  const setFill = () => (
    theme === 'default' || theme === 'primary'
      ? `${colors.white}`
      : theme === 'secondary'
        ? `${colors.manoBlack}`
        : fill
  );
  /* eslint-enable no-nested-ternary */

  /* eslint-disable react/button-has-type */
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames}
      data-qa={dataQa}
      ref={ref}
      style={{
        marginBottom,
        ...style,
      }}
    >
      {icon
        && <Icon name={icon} size="16" fill={setFill()} />}
      {children && children}
      {title && title}
    </button>
  );
  /* eslint-enable react/button-has-type */
});

type propTypes = {
  children?: string | Node,
  theme?: 'default' | 'primary' | 'secondary' | 'reset',
  size?: 'big' | 'default' | 'small' | 'xsmall',
  type?: 'submit' | 'reset' | 'button' | 'menu',
  icon?: string,
  reverse?: boolean,
  disabled?: boolean,
  onClick?: () => void,
  dataQa?: string,
  className?: string,
  title?: string | () => void,
  fill?: string,
  marginBottom?: string,
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
  title: undefined,
  fill: colors.white,
  marginBottom: '0',
};

export default Button;

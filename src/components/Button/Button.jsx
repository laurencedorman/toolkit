import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../Icon';
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
}, ref) => {
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

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  theme: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'ghost',
    'reset',
  ]),
  size: PropTypes.oneOf(['big', 'default', 'small', 'xsmall']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  reverse: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  dataQa: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  fill: PropTypes.string,
  marginBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Button.displayName = 'button';

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
  title: '',
  fill: colors.white,
  marginBottom: '0',
};

export default Button;

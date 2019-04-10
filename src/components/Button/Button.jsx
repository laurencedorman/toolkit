/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
  iconComponent,
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
      [styles.icon]: iconComponent,
      [styles.reverse]: reverse,
      [styles.onlyIcon]: !children && !title,
    },
    className,
  );

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
      {iconComponent
        && <Icon component={iconComponent} size="16" fill={fill} />}
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
  iconComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
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
  iconComponent: null,
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

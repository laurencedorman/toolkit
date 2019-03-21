/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import GetMeasure from '../GetMeasure';
import OptionContainer from './OptionContainer';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */

const DropDown = ({
  title,
  on,
  toggle,
  className,
  disabled,
  icon,
  backgroundColor,
  fill,
  stroke,
  sideLeft,
  sideRight,
  options,
  right,
  active,
  onClick,
}) => {
  const wrapper = cn(
    styles.wrapper,
    className,
  );

  const iconButton = cn(styles.iconButton, { [styles.rotate]: on });

  return (
    <GetMeasure>
      {({ size, ref }) => (
        <div className={wrapper}>
          <Button
            ref={ref}
            onClick={toggle}
            className={styles.button}
            disabled={disabled}
            style={{ backgroundColor }}
          >
            {renderTitle(title)}
            {icon && (
              <Icon
                name="chevron-right"
                size="16"
                className={iconButton}
                fill={fill}
                stroke={stroke}
              />
            )}
          </Button>
          <OptionContainer
            on={on}
            toggle={toggle}
            size={size}
            options={options}
            right={right}
            className={className}
            onClick={onClick}
            active={active}
            sideLeft={sideLeft}
            sideRight={sideRight}
          />
        </div>
      )}
    </GetMeasure>
  );
};
/* eslint-disable */
const renderTitle = title =>
  typeof title === 'string'
    ? title
    : typeof title === 'function'
      ? title()
      : null;
/* eslint-enable */

DropDown.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  right: PropTypes.bool,
  toggle: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.string,
  icon: PropTypes.bool,
  backgroundColor: PropTypes.string,
  sideLeft: PropTypes.bool,
  sideRight: PropTypes.bool,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

DropDown.defaultProps = {
  right: false,
  disabled: false,
  active: null,
  icon: true,
  backgroundColor: colors.balataGreen,
  className: '',
  sideLeft: false,
  sideRight: false,
  toggle: null,
  fill: colors.white,
  stroke: colors.white,
};

export default DropDown;

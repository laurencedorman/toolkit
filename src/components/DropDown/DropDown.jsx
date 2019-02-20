// @flow
import React from 'react';
import cn from 'classnames';

import {
  Button, GetMeasure, Icon, OptionContainer,
} from 'components';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
/* eslint-disable */
const DropDown = ({
  title,
  on,
  toggle,
  className,
  disabled,
  icon,
  backgroundColor,
  fill,
  sideLeft,
  sideRight,
  options,
  right,
  active,
  onClick,
}:propTypes) => {
  const wrapper = cn(
    styles.wrapper,
    className,
  );

  const iconButton = cn(
    styles.iconButton,
    { [styles.rotate]: on },
  );

  return (
    <GetMeasure>
      {({ size, ref }) => (
        <div className={wrapper}>
          {on && <div className={styles.closeTarget} onClick={toggle} />}
          <Button
            ref={ref}
            onClick={toggle}
            className={styles.button}
            disabled={disabled}
            style={{backgroundColor}}
          >
            {renderTitle(title)}
            {icon && (
              <Icon
                name="chevron-right"
                size="10"
                className={iconButton}
                fill={fill}
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

const renderTitle = title => (
  typeof title === 'string'
    ? title
    : typeof title === 'function'
      ? title()
      : null
);

/* eslint-enable */

type propTypes = {
  title: string | Node | () => void,
  options: Array,
  right?: boolean,
  on: boolean,
  toggle?: () => void,
  onClick: () => void,
  className?: string,
  disabled?: boolean,
  active?: string,
  icon?: boolean,
  backgroundColor?: string,
  sideLeft?: boolean,
  sideRight?: boolean,
  fill?: string,
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
};

export default DropDown;

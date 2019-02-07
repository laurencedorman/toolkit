// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';

import {
  Button, GetMeasure, Icon,
} from 'components';

import colors from '../../styles/colors';
import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
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

/* eslint-disable */
export default class DropDown extends PureComponent<propTypes> {
  static defaultProps = {
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

  renderTitle = title => (
    typeof title === 'string'
      ? title
      : typeof title === 'function'
        ? title()
        : null
  );

  render() {
    const {
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
    } = this.props;

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
            {on
            && <div className={styles.closeTarget} onClick={toggle} />}
            <Spring
              force
              native
              config={{ tension: 290, friction: 20, mass: 0.2 }}
              from={{ w: size.width }}
              to={{ w: 'auto' }}
            >
              {({ w }) => (
                <animated.div
                  className={styles.animated}
                  style={{
                    width: w.interpolate(w => w),
                    backgroundColor,
                  }}
                >
                  <Button
                    ref={ref}
                    onClick={toggle}
                    className={styles.button}
                    disabled={disabled}
                  >
                    {this.renderTitle(title)}
                    {icon
                      && (
                        <Icon
                          name="chevron-right"
                          size="10"
                          className={iconButton}
                          fill={fill}
                        />
                      )
                    }
                  </Button>
                </animated.div>
              )}
            </Spring>
            {renderOptions(on, toggle, size, options, right, className, onClick, active, sideLeft, sideRight )}
          </div>
        )}
      </GetMeasure>
    );
  }
}

const renderOptions = (
  on, toggle, size, options, right, className, onClick, active, sideLeft, sideRight,
) => {
  const container = cn(
    styles.container,
    {
      [styles.show]: on,
      [styles.right]: right,
      [styles.sideLeft]: sideLeft,
      [styles.sideRight]: sideRight,
    },
  );

  const itemOption = item => cn(
    className,
    { [styles.disabled]: item.disabled },
    { [styles.active]: (item.value || item.id) === active },
  );

  const setPosition = {
    top: !sideLeft && !sideRight && `${size.height + 8}px`,
    right: sideLeft && !sideRight && `${size.width + 8}px`,
    left: sideRight && `${size.width + 8}px`,
  };

  return (
    <div
      className={container}
      style={setPosition}
    >
      <ul className={styles.list}>
        {options.map((item, index) => {
          const key = item.id ? item.id.toString() : index;
          return (
            <li
              key={key}
              className={itemOption(item)}
              data-id={item.id}
              data-value={item.value}
              disabled={item.disabled}
              onClick={!item.disabled ? onClick : null}
            >
              <span
                onClick={!item.disabled ? toggle : null}
                key={key}
              >
                {item.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
/* eslint-enable */

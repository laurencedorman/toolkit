// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import { SizeMe } from 'react-sizeme';
import cn from 'classnames';
import { Button, Icon } from 'components';

import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
type propTypes = {
  title: string | Node,
  options: Array,
  right?: boolean,
  on: boolean,
  toggle: () => void,
  itemClick: () => void,
  className?: string,
  disabled?: boolean,
  icon?: boolean,
};


export default class DropDown extends PureComponent<propTypes> {
  static defaultProps = {
    right: false,
    disabled: false,
    icon: true,
    className: '',
  };

  renderOptions = (on, toggle) => {
    const {
      options, itemClick, right, className,
    } = this.props;

    const container = cn(
      styles.container,
      {
        [styles.show]: on,
        [styles.right]: right,
      },
    );

    const itemOption = item => cn(
      className,
      { [styles.disabled]: item.disabled },
    );
    /* eslint-disable */
    return (
      <div
        className={container}
        right={right ? 1 : 0}
      >
        <ul className={styles.list}>
          {options.map(item => (
            <li
              key={item.title}
              className={itemOption(item)}
              data-id={item.id}
              data-value={item.title}
              disabled={item.disabled}
              onClick={!item.disabled ? itemClick : null}
            >
              <span onClick={!item.disabled ? toggle : null}>
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const {
      title, on, toggle, className, disabled, icon,
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
      <div className={wrapper}>
        {on
          && <div className={styles.closeTarget} onClick={toggle} />}
        <SizeMe>
          {({ size }) => (
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
                  style={{ width: w.interpolate(w => w) }}
                >
                  <Button
                    onClick={toggle}
                    className={styles.button}
                    disabled={disabled}
                  >
                    {title}
                    {icon
                      && (
                        <Icon
                          name="chevron-left"
                          size="10"
                          className={iconButton}
                        />
                      )
                    }
                  </Button>
                </animated.div>
              )}
            </Spring>
          )}
        </SizeMe>
        {this.renderOptions(on, toggle)}
      </div>
    );
  }
}
/* eslint-enable */

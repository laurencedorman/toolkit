// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import { SizeMe } from 'react-sizeme';
import cn from 'classnames';
import { Button } from 'components';

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
};

/* eslint-disable */
export default class DropDown extends PureComponent<propTypes> {
  static defaultProps = {
    right: false,
    disabled: false,
    className: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = (e) => {
    const { on, toggle } = this.props;

    const keys = {
      Escape: () => {
        e.preventDefault();
        !on
          ? e.stopPropagation()
          : toggle();
      },
    };

    keys[e.key]
    && keys[e.key]();
  };

  renderOptions = (on, toggle) => {
    const { options, itemClick, right, className } = this.props;

    const container = cn(
      styles.container,
      {
        [styles.show]: on,
        [styles.right]: right,
      },
    );

    const itemOption = item => cn(
      className,
      {[styles.disabled]: item.disabled}
    );

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
    const { title, on, toggle, className, disabled } = this.props;

    const wrapper = cn(
      styles.wrapper,
      className,
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
              config={{ tension: 250, friction: 20, mass: 0.2 }}
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

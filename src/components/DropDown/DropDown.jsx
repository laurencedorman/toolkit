// @flow
import React, { PureComponent } from 'react';
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
};

/* eslint-disable */
export default class DropDown extends PureComponent<propTypes> {
  static defaultProps = {
    right: false,
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
    const { options, itemClick, right } = this.props;

    const container = cn(
      styles.container,
      {
        [styles.show]: on,
        [styles.right]: right,
      },
    );

    return (
      <div
        className={container}
        right={right ? 1 : 0}
      >
        <ul className={styles.list} onClick={toggle}>
          {options.map(option => (
            <li
              key={option.title}
              data-value={option.title}
              onClick={itemClick}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { title, on, toggle, className } = this.props;

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
          && <div className={styles.closeTarget} onClick={toggle} /> }
        <Button
          onClick={toggle}
          className={styles.button}
        >
          {title}
          <Icon
            name="chevron-left"
            size="10"
            className={iconButton}
          />
        </Button>
        {this.renderOptions(on, toggle)}
      </div>
    );
  }
}
/* eslint-enable */

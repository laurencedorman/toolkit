import React, { PureComponent } from 'react';
import cn from 'classnames';

import styles from './Tabs.module.scss';

type propTypes = {
  label: string,
  activeTab: string,
  onClick: () => void,
  className?: string,
  defaultActive?: boolean,
}

/* eslint-disable */
export default class Tab extends PureComponent<propTypes> {
  static defaultProps = {
    className: '',
    defaultActive: false,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      activeTab, label, className, defaultActive,
    } = this.props;

    const classNames = cn(
      className,
      { [styles.active]: activeTab === label },
    );

    return (
      <li
        className={styles.tabItem}
        key={label}
      >
        <span
          className={classNames}
          onClick={this.onClick}
          title={label}
          aria-selected={activeTab === label}
          default={defaultActive ? 1 : 0}
          role="button"
        >
          {label}
        </span>
      </li>
    )
  }
}
/* eslint-enable */

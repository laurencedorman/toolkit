import React, { PureComponent } from 'react';
import cn from 'classnames';

import styles from './Tabs.module.scss';

type propTypes = {
  label: string,
  activeTab: string,
  onClick: () => void,
  className?: string,
}

/* eslint-disable */
export default class Tab extends PureComponent<propTypes> {
  static defaultProps = { className: '' };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label)
  };

  render() {
    const { activeTab, label, className } = this.props;

    const classNames = cn(
      className,
      { [styles.active]: activeTab === label },
    );

    return (
      <li className={styles.tabLabel}>
        <span
          className={classNames}
          onClick={this.onClick}
          aria-selected={activeTab === label}
          role="button"
        >
          {typeof label === 'function' ? label() : label}
        </span>
      </li>
    )
  }
}
/* eslint-enable */

/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Tabs.module.scss';

/* eslint-disable */
export default class TabLabel extends PureComponent {
  static defaultProps = {
    className: '',
    activeTab: '',
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const { activeTab, label, className } = this.props;

    const classNames = cn(className, { [styles.active]: activeTab === label });

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
    );
  }
}
/* eslint-enable */

TabLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  activeTab: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

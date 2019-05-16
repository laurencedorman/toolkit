/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Tabs.module.scss';

export default class TabLabel extends PureComponent {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const { activeTab, label, className } = this.props;

    const classNames = cn(className, { [styles.active]: activeTab === label });

    return (
      <li
        className={styles.tabLabel}
        aria-selected={activeTab === label}
        role="tab"
      >
        <span className={classNames} onClick={this.onClick}>
          {typeof label === 'function' ? label() : label}
        </span>
      </li>
    );
  }
}

TabLabel.displayName = 'TabLabel';

TabLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  activeTab: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TabLabel.defaultProps = {
  className: '',
  activeTab: '',
};

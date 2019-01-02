import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Tabs.module.scss';

type propTypes = {
  label: string,
  activeTab: string,
  onClick: () => void,
  className?: string,
  defaultActive?: boolean,
  to?: string,
}

/* eslint-disable */
export default class Tab extends PureComponent<propTypes> {
  static defaultProps = {
    className: '',
    defaultActive: false,
    to: null,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  handleTag = () => {
    const { to } = this.props;
    return to !== null ? Link : 'span'
  };

  render() {
    const {
      activeTab, label, className, defaultActive, to,
    } = this.props;

    const classNames = cn(
      className,
      { [styles.active]: activeTab === label },
    );

    const properties = {
      className: classNames,
      onClick: this.onClick,
      to,
      role: 'button',
      title: label,
      default: defaultActive ? 1 : 0,
      'aria-selected' : activeTab === label,
    };

    return React.createElement(
      this.handleTag(),
      { ... properties },
      label,
    );
  }
}

/* eslint-enable */

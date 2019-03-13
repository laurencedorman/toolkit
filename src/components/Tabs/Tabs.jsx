// @flow
import React, { Component } from 'react';
import cn from 'classnames';

import HeightTransition from '../HeightTransition';
import TabBody from './TabBody';
import TabLabel from './TabLabel';
import Wrapper from '../Wrapper';
import styles from './Tabs.module.scss';

type propTypes = {
  className?: string,
  children: Array<Node>,
};

/* eslint no-shadow:  */
export default class Tabs extends Component<propTypes> {
  static defaultProps = { className: '' };

  constructor(props) {
    super(props);
    this.state = { activeTab: undefined };
  }

  componentDidMount() {
    this.ismounted = true;
    const { children } = this.props;

    if (this.ismounted && React.Children.count(children) > 1) {
      React.Children.map(children, child =>
        child.props.defaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (
      React.Children.count(prevProps.children) !==
      React.Children.count(children)
    ) {
      React.Children.map(children, child =>
        child.props.defaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      );
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
  }

  onClickTabItem = labelTab => this.setState({ activeTab: labelTab });

  render() {
    const { children, className } = this.props;
    const { activeTab } = this.state;

    const classNames = cn(styles.tabs, className);

    return (
      <Wrapper className={classNames}>
        <ul className={styles.tabList}>
          {React.Children.map(children, child => {
            const { label } = child.props;
            return React.cloneElement(
              <TabLabel
                activeTab={activeTab}
                label={label}
                onClick={this.onClickTabItem}
                key={label}
              />
            );
          })}
        </ul>
        <HeightTransition>
          <div className={styles.tabContent}>
            <TabBody activeTab={activeTab}>{children}</TabBody>
          </div>
        </HeightTransition>
      </Wrapper>
    );
  }
}
/* eslint shadow:  */

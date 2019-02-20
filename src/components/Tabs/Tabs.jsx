// @flow
import React, { Component } from 'react';
import { animated, Spring } from 'react-spring';
import cn from 'classnames';
import {
  Wrapper, GetMeasure, TabBody, TabLabel,
} from 'components';
import styles from './Tabs.module.scss';

type propTypes = {
  className?: string,
  children: Array<Node>,
}

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
      React.Children.map(children, child => (
        child.props.defaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      ));
    }
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (React.Children.count(prevProps.children) !== React.Children.count(children)) {
      React.Children.map(children, child => (
        child.props.defaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      ));
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
  }

  onClickTabItem = labelTab => this.setState({ activeTab: labelTab });

  render() {
    const { children, className } = this.props;
    const { activeTab } = this.state;

    const classNames = cn(
      styles.tabs,
      className,
    );

    return (
      <Wrapper className={classNames}>
        <ul className={styles.tabList}>
          {React.Children.map(children, (child) => {
            const { label } = child.props;
            return React.cloneElement(
              <TabLabel
                activeTab={activeTab}
                label={label}
                onClick={this.onClickTabItem}
                key={label}
              />,
            );
          })}
        </ul>
        <GetMeasure>
          {({ size, ref }) => (
            <Spring
              force
              native
              config={{ tension: 250, friction: 20, mass: 0.2 }}
              from={{ height: size.height }}
              to={{ height: 'auto' }}
            >
              {style => (
                <animated.div style={style}>
                  <div ref={ref} className={styles.tabContent}>
                    <TabBody activeTab={activeTab}>
                      {children}
                    </TabBody>
                  </div>
                </animated.div>
              )}
            </Spring>
          )}
        </GetMeasure>
      </Wrapper>
    );
  }
}
/* eslint shadow:  */

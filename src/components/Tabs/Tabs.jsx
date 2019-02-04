import React, { Component } from 'react';
import { Transition, animated, Spring } from 'react-spring';
import cn from 'classnames';
import { Wrapper, GetMeasure } from 'components';
import Tab from './Tab';
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
    const { children } = this.props;

    if (React.Children.count(children) > 1) {
      React.Children.map(children, child => (
        child.props.defaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      ));
    }
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
              <Tab
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
                    {bodyTabs(children, activeTab)}
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

/* eslint-disable  */
const bodyTabs = (children, activeTab) => {
  if (React.Children.count(children) === 1) return children;

  return React.Children.map(children, (child) => {
    if (child.props.label !== activeTab) return undefined;

    const isOn = child.props.label === activeTab;

    return (
      <Transition
        native
        items={isOn}
        from={{ o: 0 }}
        enter={{ o: 1 }}
        leave={{ o: 0 }}
        key={child.props.label}
      >
        {isOn => isOn
          && (
            ({ o }) => (
              <animated.div
                key={child.props.label}
                style={{ opacity: o.interpolate(o => o) }}
              >
                {child.props.children}
              </animated.div>
            )
          )
        }
      </Transition>
    );
  })
};
/* eslint-enable  */

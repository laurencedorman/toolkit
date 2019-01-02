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

/* eslint-disable */
export default class Tabs extends Component<propTypes> {
  static defaultProps = { className: '' };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.children[0].props.label || props.children,
    };
  }

  componentDidMount() {
    const { children } = this.props;
    children.map(child => (
      child.props.defaultActive
        && this.onClickTabItem(child.props.label)
    ));
  }

  onClickTabItem = tab => this.setState({ activeTab: tab });

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
          {children.map((child) => {
            const { label, to } = child.props;
            return (
              <li className={styles.tabItem}>
                <Tab
                  key={label}
                  activeTab={activeTab}
                  label={label}
                  onClick={this.onClickTabItem}
                  to={to}
                />
              </li>
            );
          })}
        </ul>

        <GetMeasure>
          {({ size }) => (
            <Spring
              force
              native
              config={{ tension: 250, friction: 20, mass: 0.2 }}
              from={{ height: size.height }}
              to={{ height: 'auto' }}
            >
              {style => (
                <animated.div
                  className={styles.tabContent}
                  style={style}
                >
                  {children.map((child) => {
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
                    })}
                </animated.div>
              )}
            </Spring>
          )}
        </GetMeasure>
      </Wrapper>
    );
  }
}
/* eslint-enable */

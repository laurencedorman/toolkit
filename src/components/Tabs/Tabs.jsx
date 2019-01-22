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

    if (children) {
      this.onClickTabItem(children[0].props.label);

      children.map(child => (
        child.props.defaultActive
          && this.onClickTabItem(child.props.label)
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
          {children
            && children.map((child) => {
              const { label, to } = child.props;
              return (
                <li
                  className={styles.tabItem}
                  key={label}
                >
                  <Tab
                    activeTab={activeTab}
                    label={label}
                    onClick={this.onClickTabItem}
                    to={to}
                  />
                </li>
              );
            })
          }
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
                    {children
                    && children.map((child) => {
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

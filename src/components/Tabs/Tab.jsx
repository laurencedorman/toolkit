import React from 'react';
import { animated, Transition } from 'react-spring';

type propTypes = {
  children: Node,
  activeTab: string,
}

/* eslint-disable */
const Tab = ({ children, activeTab }:propTypes) => {
  if (React.Children.count(children) === 1) return children;

  return React.Children.map(children, (child) => {
    const { label, children } = child.props;

    if (label !== activeTab) return undefined;

    const isOn = label === activeTab;

    return (
      <Transition
        native
        items={isOn}
        from={{ o: 0 }}
        enter={{ o: 1 }}
        leave={{ o: 0 }}
        key={label}
      >
        {isOn => isOn
          && (
            ({ o }) => (
              <animated.div
                key={label}
                style={{ opacity: o.interpolate(o => o) }}
              >
                {children}
              </animated.div>
            )
          )
        }
      </Transition>
    );
  })
};
/* eslint-enable */

export default Tab;

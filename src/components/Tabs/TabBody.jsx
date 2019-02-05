// @flow
import React from 'react';
import { animated, Transition } from 'react-spring';


/* eslint-disable */
const TabBody = ({ children, activeTab }:propTypes) => {
  return React.Children.map(children, (child) => {
    const { label } = child.props;

    if (React.Children.count(children) === 1) return child.props.children;

    if (label !== activeTab) return undefined;

    const isOn = label === activeTab;

    return (
      <Transition
        native
        unique
        force
        reset
        items={isOn}
        from={{ o: 0 }}
        enter={{ o: 1 }}
        leave={{ o: 0 }}
      >
        {isOn => isOn
          && (
            ({ o }) => (
              <animated.div
                key={label}
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
/* eslint-enable */

type propTypes = {
  children: Node,
  activeTab: string,
}

export default TabBody;

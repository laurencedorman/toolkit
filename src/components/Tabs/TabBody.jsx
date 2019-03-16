import React from 'react';
import PropTypes from 'prop-types';
import { animated, Transition } from 'react-spring';

/* eslint-disable */
const TabBody = ({ children, activeTab }) => {
  const setChildren = React.Children.toArray(children);

  return React.Children.map(setChildren, (child) => {
    const { label } = child.props;

    if (!Array.isArray(children)) return child.props.children;

    if (label !== activeTab) return undefined;

    const isOn = label === activeTab;

    return (
      <Transition
        native
        unique
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

TabBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node])
  ]),
  activeTab: PropTypes.string,
};

export default TabBody;

/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { animated, Transition } from 'react-spring';

const TabBody = ({ children, activeTab }) => {
  return React.Children.map(children, child => {
    const { label } = child.props;

    if (!Array.isArray(children)) return child.props.children;

    if (label !== activeTab) return undefined;

    return (
      <Transition
        native
        unique
        reset
        items={true}
        from={{ o: 0 }}
        enter={{ o: 1 }}
        leave={{ o: 0 }}
      >
        {isOn =>
          isOn &&
          (({ o }) => (
            <animated.div
              key={label}
              style={{ opacity: o.interpolate(o => o) }}
            >
              {child.props.children}
            </animated.div>
          ))
        }
      </Transition>
    );
  });
};

TabBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node]),
  ]).isRequired,
  activeTab: PropTypes.string,
};

TabBody.defaultProps = { activeTab: undefined };

export default TabBody;

/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const Link = ({ onClick, href, children, ...restOfProps }) => {
  const tagName = !onClick && href ? 'a' : 'button';
  const buttonProps = tagName === 'button' ? { type: 'button' } : {};

  return React.createElement(
    tagName,
    {
      className: styles.Link,
      href,
      onClick,
      ...buttonProps,
      ...restOfProps,
    },
    children
  );
};

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.href && !props.onClick) {
    return new Error(
      `One of 'href' or 'onClick' is required by ${componentName} component.`
    );
  }
};

Link.propTypes = {
  href: requiredPropsCheck,
  onClick: requiredPropsCheck,
};

export default Link;

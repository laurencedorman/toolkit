/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Layout.module.scss';

const Layout = ({
  children, className, styleGuidist, direction, style, dataQa,
}) => {
  const classNames = cn(
    styles.layout,
    {
      [styles.guide]: styleGuidist,
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column',
    },
    className,
  );

  return (
    <div
      className={classNames}
      style={style}
      data-qa={dataQa}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
  styleGuidist: PropTypes.bool,
  style: PropTypes.shape({}),
  dataQa: PropTypes.string,
};

Layout.defaultProps = {
  className: undefined,
  direction: 'row',
  styleGuidist: false,
  style: {},
  dataQa: '',
};

export default Layout;

/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, className, dataQa }) => {
  const classNames = cn(
    styles.card,
    className,
  );

  return (
    <div className={classNames} data-qa={dataQa}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  dataQa: '',
};

export default Card;

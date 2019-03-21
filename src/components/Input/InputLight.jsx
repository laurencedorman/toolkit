/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cn from 'classnames';
import Input from './Input';
import styles from './Input.module.scss';

const InputLight = ({ className, ...props }) => {
  const classNames = cn(className, styles.inputLight);

  return React.cloneElement(
    <Input
      reset
      type={props.type}
      label={props.label}
      id={props.id}
      name={props.name}
    />,
    {
      ...props,
      className: classNames,
    }
  );
};

export default InputLight;

import React from 'react';
import cn from 'classnames';
import { Input } from 'components';
import styles from './Input.module.scss';

const InputLight = ({ className, ...props }) => {
  const classNames = cn(
    className,
    styles.inputLight,
  );

  return React.cloneElement(
    <Input reset />,
    {
      ...props,
      className: classNames,
    },
  );
};

export default InputLight;

// @flow
import React from 'react';
import cn from 'classnames';
import { Svg } from 'components';
import styles from './Icon.module.scss';

/**
 * @visibleName Icon
 */
const IconComponent = ({
  onClick, className, name, size, fill, dataQa,
}: propTypes) => {
  const classNames = cn(
    styles.container,
    className,
  );

  /* eslint-disable */
  return (
    <div
      className={classNames}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex="-1"
      role={onClick ? 'button' : 'image'}
      data-qa={dataQa}
    >
      <Svg
        name={name}
        size={size}
        fill={fill}
      />
    </div>
  );
  /* eslint-enable */
};

type propTypes = {
  onClick?: () => void,
  className?: string,
  name: string,
  size?: number,
  fill?: string | () => void,
  dataQa?: string,
};

IconComponent.defaultProps = {
  onClick: null,
  className: '',
  size: 32,
  fill: '#0c193a',
  dataQa: '',
};

export default IconComponent;

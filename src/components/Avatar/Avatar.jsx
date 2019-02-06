import React from 'react';
import cn from 'classnames';
import styles from './Avatar.module.scss';

const Avatar = ({ className, avatar, size }:propTypes) => {
  const classNames = cn(
    className,
    styles.avatar,
    styles[size],
  );

  return (
    <div
      role="img"
      aria-label="Avatar"
      className={classNames}
    >
      <svg
        viewBox="0 0 48 48"
        width={size === 'big' ? '48px' : '24px'}
        height="auto"
      >
        <defs>
          <clipPath id="maskAvatar">
            <path d="M47.1 17L34.4 1.5C33.5.4 32-.2 30.6 0l-20 3.2C9.2 3.4 8 4.4 7.5 5.7L.3 24.4c-.5 1.4-.3 2.9.6 4l12.7 15.5c.9 1.1 2.4 1.7 3.8 1.4l19.9-3.2c1.4-.2 2.6-1.2 3.2-2.5L47.7 21c.6-1.4.3-2.9-.6-4z" />
          </clipPath>
        </defs>
      </svg>
      <img
        src={avatar}
        alt={avatar}
      />
    </div>
  );
};

type propTypes = {
  className?: string,
  avatar: string,
  size?: 'big' | 'small',
};

Avatar.defaultProps = {
  className: '',
  size: 'big',
};

export default Avatar;

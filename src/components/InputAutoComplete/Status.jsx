// @flow
import React from 'react';
import Loader from '../Loader';
import { STATUS } from './constants';
import styles from './Status.module.scss';

const Status = ({ status, translations }: PropTypes) => {
  // Have default values
  const { keepTyping, noResult } = (translations : any);
  let content;

  switch (status) {
    case STATUS.KEEP_TYPING:
      content = keepTyping;
      break;
    case STATUS.LOADING:
      content = <Loader />;
      break;
    case STATUS.NO_RESULT:
      content = noResult;
      break;
    default:
      throw new Error('Unknown status');
  }

  return <div className={styles.status}>{content}</div>;
};

type PropTypes = {
  status: string,
  translations?: {
    keepTyping: string,
    noResult: string,
  },
};

Status.defaultProps = {
  translations: {
    keepTyping: 'Keep typing ✍️',
    noResult: 'No result 😞',
  },
};

export default Status;

// @flow
import React from 'react';
import ReactTable from 'react-table';
import cn from 'classnames';
import defaultStyles from 'react-table/react-table.css';
import './Table.scss';

const Table = ({
  className, columns, data, defaultPageSize, loading,
}: propTypes) => {
  const classNames = cn(
    defaultStyles,
    className,
    'table',
    '-striped',
    '-highlight',
  );

  return (
    <ReactTable
      className={classNames}
      columns={columns}
      data={data}
      defaultPageSize={defaultPageSize}
      loading={loading}
    />
  );
};

type propTypes = {
  className?: string,
  columns: Array,
  data?: Array,
  defaultPageSize?: number,
  loading?: boolean,
}

Table.defaultProps = {
  className: '',
  data: [],
  defaultPageSize: 10,
  loading: false,
};

export default Table;

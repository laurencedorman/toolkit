import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import cn from 'classnames';
import defaultStyles from 'react-table/react-table.css';
import './Table.scss';

const Table = ({
  className, columns, data, defaultPageSize, loading,
}) => {
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

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape()),
  data: PropTypes.arrayOf(PropTypes.shape()),
  defaultPageSize: PropTypes.number,
  loading: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  columns: [],
  data: [],
  defaultPageSize: 10,
  loading: false,
};

export default Table;

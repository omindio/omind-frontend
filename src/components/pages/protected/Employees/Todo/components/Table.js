import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Alert } from 'react-bootstrap';

import { getAllAction } from '@containers/Employee/GetAll';
import { StateErrorHandler } from '@utils/ErrorHandler';
import { Pagination } from '@components/common';

import TableItems from './TableItems';

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
    };
  }

  render() {
    const { pages, current, deleteError, fetchDataError, showSuccessAlert } = this.props;
    const { limit } = this.state;
    return (
      <React.Fragment>
        <StateErrorHandler error={deleteError} />
        <StateErrorHandler error={fetchDataError} />
        <Alert show={showSuccessAlert} key={0} variant="success">
          Employee deleted successfully.
        </Alert>

        <Table responsive="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Full Name</th>
              <th className="d-none d-sm-table-cell">Email</th>
              <th className="d-none d-sm-table-cell">Work Position</th>
              <th className="d-none d-sm-table-cell">Verified</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <TableItems limit={limit} />
          </tbody>
        </Table>
        <Pagination action={getAllAction} currentPage={current} pages={pages} limit={limit} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getAll, delete: remove } = state.employee;

  return {
    pages: getAll.pages,
    current: getAll.current,
    fetchDataError: getAll.error,
    deleteError: remove.error,
    showSuccessAlert: remove.showSuccessAlert,
  };
};

export default connect(mapStateToProps)(TableComponent);

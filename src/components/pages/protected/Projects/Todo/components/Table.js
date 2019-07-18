import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getAllAction } from '@containers/User/GetAll';
import { StateErrorHandler } from '@utils/ErrorHandler';
import Pagination from './Pagination';
import TableItems from './TableItems';

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
    };
  }

  render() {
    const { pages, current, deleteError, fetchDataError } = this.props;
    const { limit } = this.state;

    return (
      <React.Fragment>
        <StateErrorHandler error={deleteError} />
        <StateErrorHandler error={fetchDataError} />

        <Table responsive="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verified</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <TableItems limit={limit} />
          </tbody>
        </Table>
        <Pagination currentPage={current} pages={pages} limit={limit} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getAll, delete: remove } = state.user;

  return {
    pages: getAll.pages,
    current: getAll.current,
    fetchDataError: getAll.error,
    deleteError: remove.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableComponent);

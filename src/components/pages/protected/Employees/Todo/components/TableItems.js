/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { MdEdit, MdDelete, MdDone, MdWatchLater } from 'react-icons/md';
import { connect } from 'react-redux';
import { Button, Modal, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions } from '@containers/Employee/Delete';
import { getAllAction } from '@containers/Employee/GetAll';
import { Loader, IdTooltip } from '@components/common';

class TableItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      showModal: false,
      employeeName: null,
      employeeID: null,
    };
  }

  componentDidMount() {
    const { fetch, limit } = this.props;
    const page = 1;
    fetch({ page, limit });
  }

  componentDidUpdate() {
    const { isDeleted, fetch, limit, currentPage, clear } = this.props;

    if (isDeleted) {
      fetch({ page: currentPage, limit });
      clear();
      this.handleCloseModal();
    }
  }

  handleDelete() {
    const { deleteEmployee } = this.props;
    const { employeeID } = this.state;
    deleteEmployee(employeeID);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal(name, id) {
    this.setState({ showModal: true, employeeName: name, employeeID: id });
  }

  render() {
    const { employees, isFetching, isFetchingData } = this.props;
    const { showModal, employeeName } = this.state;

    if (isFetchingData) {
      return (
        <tr>
          <td colSpan="6">
            <Loader />
          </td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        {employees.length > 0 ? (
          employees.map(employee => (
            <tr key={employee.id}>
              <td>
                <IdTooltip id={employee.id} />
              </td>
              <td>
                {employee.user.name}
                &nbsp;
                {employee.user.lastName}
              </td>
              <td className="d-none d-sm-table-cell">{employee.user.email}</td>
              <td className="d-none d-sm-table-cell">{employee.workPosition}</td>
              <td className="d-none d-sm-table-cell">
                {employee.user.isVerified === true ? (
                  <Badge variant="success">
                    <MdDone />
                  </Badge>
                ) : (
                  <Badge variant="warning">
                    <MdWatchLater />
                  </Badge>
                )}
              </td>
              <td className="text-right">
                <LinkContainer to={`/employees/edit/${employee.id}`}>
                  <Button disabled={isFetching} variant="primary" size="sm">
                    <MdEdit />
                  </Button>
                </LinkContainer>
                <Button
                  disabled={isFetching}
                  onClick={() => {
                    this.handleShowModal(employee.user.name, employee.id);
                  }}
                  className="ml-1"
                  variant="danger"
                  size="sm"
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No results found.</td>
          </tr>
        )}

        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete &nbsp;
            <strong>{employeeName}</strong>?
          </Modal.Body>
          <Modal.Footer>
            <Button disabled={isFetching} variant="link" onClick={this.handleCloseModal}>
              No
            </Button>
            <Button disabled={isFetching} variant="danger" onClick={this.handleDelete}>
              {isFetching ? 'Wait...' : 'Yes'}
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getAll, delete: remove } = state.employee;
  const { isFetching, success } = remove;
  const { isFetching: isFetchingData, employees, current } = getAll;
  return {
    isFetching,
    employees,
    isDeleted: success,
    isFetchingData,
    currentPage: current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    deleteEmployee: id => dispatch(actions.deleteAction(id)),
    clear: () => dispatch(actions.clearAction()),
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableItems);

/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { MdEdit, MdDelete, MdDone, MdWatchLater } from 'react-icons/md';
import { connect } from 'react-redux';
import { Button, Modal, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions } from '@containers/User/Delete';
import { getAllAction } from '@containers/User/GetAll';
import { Loader, IdTooltip } from '@components/common';

class TableItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      showModal: false,
      userName: null,
      userId: null,
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
    }
  }

  handleDelete() {
    const { deleteUser } = this.props;
    const { userId } = this.state;
    deleteUser(userId);
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal(name, id) {
    this.setState({ showModal: true, userName: name, userId: id });
  }

  render() {
    const { users, isFetching, isFetchingData } = this.props;
    const { showModal, userName } = this.state;

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
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>
                <IdTooltip id={user.id} />
              </td>
              <td className="d-none d-sm-table-cell">
                {user.name}&nbsp;{user.lastName}
              </td>
              <td>{user.email}</td>
              <td className="d-none d-sm-table-cell">{user.role}</td>
              <td className="d-none d-sm-table-cell">
                {user.isVerified === true ? (
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
                <LinkContainer to={`/users/edit/${user.id}`}>
                  <Button disabled={isFetching} variant="primary" size="sm">
                    <MdEdit />
                  </Button>
                </LinkContainer>
                <Button
                  disabled={isFetching}
                  onClick={() => {
                    this.handleShowModal(user.name, user.id);
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
            Are you sure to delete&nbsp;<strong>{userName}</strong>?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={this.handleCloseModal}>
              No
            </Button>
            <Button variant="danger" onClick={this.handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getAll, delete: remove } = state.user;
  const { isFetching, success } = remove;
  const { isFetching: isFetchingData, users, current } = getAll;
  return {
    isFetching,
    users,
    isDeleted: success,
    isFetchingData,
    currentPage: current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    deleteUser: id => dispatch(actions.deleteAction(id)),
    clear: () => dispatch(actions.clearAction()),
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableItems);

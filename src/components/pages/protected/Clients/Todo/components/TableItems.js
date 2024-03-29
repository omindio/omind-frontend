/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { MdEdit, MdDelete, MdDone, MdWarning, MdWatchLater } from 'react-icons/md';
import { connect } from 'react-redux';
import { Button, Modal, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions } from '@containers/Client/Delete';
import { getAllAction } from '@containers/Client/GetAll';
import { Loader, IdTooltip } from '@components/common';

class TableItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      showModal: false,
      companyName: null,
      clientId: null,
      // index: null,
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
    const { deleteClient } = this.props;
    const { clientId } = this.state;
    deleteClient(clientId);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal(name, id) {
    this.setState({ showModal: true, companyName: name, clientId: id });
  }

  render() {
    const { clients, isFetching, isFetchingData } = this.props;
    const { showModal, companyName } = this.state;

    if (isFetchingData) {
      return (
        <tr>
          <td colSpan="7">
            <Loader />
          </td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        {clients.length > 0 ? (
          clients.map(client => (
            <tr key={client.id}>
              <td>
                <IdTooltip id={client.id} />
              </td>
              <td>{client.companyName}</td>
              <td className="d-none d-sm-table-cell">
                {client.user.name}&nbsp;{client.user.lastName}
              </td>
              <td className="d-none d-sm-table-cell">{client.user.email}</td>
              <td className="d-none d-sm-table-cell">
                {client.published === true ? (
                  <Badge variant="success">
                    <MdDone />
                  </Badge>
                ) : (
                  <Badge variant="warning">
                    <MdWarning />
                  </Badge>
                )}
              </td>
              <td className="d-none d-sm-table-cell">
                {client.user.isVerified === true ? (
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
                <LinkContainer to={`/clients/edit/${client.id}`}>
                  <Button disabled={isFetching} variant="primary" size="sm">
                    <MdEdit />
                  </Button>
                </LinkContainer>
                <Button
                  disabled={isFetching}
                  onClick={() => {
                    this.handleShowModal(client.companyName, client.id);
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
            <td colSpan="7">No results found.</td>
          </tr>
        )}
        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete&nbsp;<strong>{companyName}</strong>?
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
  const { getAll, delete: remove } = state.client;
  const { isFetching, success } = remove;
  const { isFetching: isFetchingData, clients, current } = getAll;
  return {
    isFetching,
    clients,
    isDeleted: success,
    isFetchingData,
    currentPage: current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    deleteClient: id => dispatch(actions.deleteAction(id)),
    clear: () => dispatch(actions.clearAction()),
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableItems);

/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions } from '@containers/Client/Delete';
import { getAllAction } from '@containers/Client/GetAll';
import { Loader } from '@components/common';

/*
  TODO: Add modal as another component
*/

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
    }
  }

  handleDelete() {
    const { deleteClient } = this.props;
    const { clientId } = this.state;
    deleteClient(clientId);
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal(name, id, index) {
    this.setState({ showModal: true, companyName: name, clientId: id, index });
  }

  render() {
    const { clients, isFetching, isFetchingData } = this.props;
    const { showModal, companyName } = this.state;

    if (isFetchingData)
      return (
        <tr>
          <td colSpan="7">
            <Loader />
          </td>
        </tr>
      );

    const items = clients.map(function(client, index) {
      return [
        <tr key={index}>
          <td>{client.id}</td>
          <td>{client.logo}</td>
          <td>{client.companyName}</td>
          <td>
            {client.user.name}&nbsp;{client.user.lastName}
          </td>
          <td>{client.email}</td>
          <td>{client.user.isVerified === true ? 'Yes' : 'No'}</td>
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
        </tr>,
      ];
    }, this);

    return (
      <React.Fragment>
        {items}
        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete&nbsp;<strong>{companyName}</strong>?
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

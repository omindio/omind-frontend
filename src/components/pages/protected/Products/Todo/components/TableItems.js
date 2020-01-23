/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { MdEdit, MdDelete, MdDone, MdWarning } from 'react-icons/md';
import { connect } from 'react-redux';
import { Button, Modal, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions } from '@containers/Product/Delete';
import { getAllAction } from '@containers/Product/GetAll';
import { Loader, IdTooltip } from '@components/common';

class TableItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      showModal: false,
      productName: null,
      productID: null,
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
      this.handleCloseModal();
      fetch({ page: currentPage, limit });
      clear();
    }
  }

  handleDelete() {
    const { deleteProduct } = this.props;
    const { productID } = this.state;
    deleteProduct(productID);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal(name, id) {
    this.setState({ showModal: true, productName: name, productID: id });
  }

  render() {
    const { products, isFetching, isFetchingData } = this.props;
    const { showModal, productName } = this.state;

    if (isFetchingData) {
      return (
        <tr>
          <td colSpan="5">
            <Loader />
          </td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        {products.length > 0 ? (
          products.map(product => (
            <tr key={product.id}>
              <td>
                <IdTooltip id={product.id} />
              </td>
              <td>{product.name}</td>
              <td className="d-none d-sm-table-cell">
                {product.published === true ? (
                  <Badge variant="success">
                    <MdDone />
                  </Badge>
                ) : (
                  <Badge variant="warning">
                    <MdWarning />
                  </Badge>
                )}
              </td>
              <td className="text-right">
                <LinkContainer to={`/manage/products/edit/${product.id}`}>
                  <Button disabled={isFetching} variant="primary" size="sm">
                    <MdEdit />
                  </Button>
                </LinkContainer>
                <Button
                  disabled={isFetching}
                  onClick={() => {
                    this.handleShowModal(product.name, product.id);
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
            <td colSpan="5">No results found.</td>
          </tr>
        )}

        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete &nbsp;
            <strong>{productName}</strong>?
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
  const { getAll, delete: remove } = state.product;
  const { isFetching, success } = remove;
  const { isFetching: isFetchingData, products, current } = getAll;
  return {
    isFetching,
    products,
    isDeleted: success,
    isFetchingData,
    currentPage: current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    deleteProduct: id => dispatch(actions.deleteAction(id)),
    clear: () => dispatch(actions.clearAction()),
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableItems);

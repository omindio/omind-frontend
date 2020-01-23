import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import { actions } from '@containers/Product/DeleteImage';

class DeleteImageModal extends React.Component {
  componentDidUpdate() {
    const { isDeleted, clear, fetchProduct, productId, closeModal } = this.props;
    if (isDeleted) {
      fetchProduct({ id: productId });
      clear();
      closeModal();
    }
  }

  render() {
    const { show, closeModal, deleteImage, productId, imageId, isFetching } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Delete Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete image?</Modal.Body>
          <Modal.Footer>
            <Button disabled={isFetching} variant="link" onClick={() => closeModal()}>
              No
            </Button>
            <Button
              disabled={isFetching}
              variant="danger"
              onClick={() => {
                deleteImage(productId, imageId);
              }}
            >
              {isFetching ? 'Wait...' : 'Yes'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { deleteImage } = state.product;

  return {
    showSuccessAlert: deleteImage.showSuccessAlert,
    isDeleted: deleteImage.success,
    isFetching: deleteImage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteImage: (productId, imageId) => dispatch(actions.deleteAction({ productId, imageId })),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteImageModal);

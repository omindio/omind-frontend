import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import { actions } from '@containers/Project/DeleteImage';

class DeleteImageModal extends React.Component {
  componentDidUpdate() {
    const { isDeleted, clear, fetchProject, projectId, closeModal } = this.props;
    if (isDeleted) {
      fetchProject({ id: projectId });
      clear();
      closeModal();
    }
  }

  render() {
    const { show, closeModal, deleteImage, projectId, imageId, isFetching } = this.props;
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
                deleteImage(projectId, imageId);
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
  const { deleteImage } = state.project;

  return {
    showSuccessAlert: deleteImage.showSuccessAlert,
    isDeleted: deleteImage.success,
    isFetching: deleteImage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteImage: (projectId, imageId) => dispatch(actions.deleteAction({ projectId, imageId })),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteImageModal);

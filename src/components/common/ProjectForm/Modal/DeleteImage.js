import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import { actions } from '@containers/Project/DeleteImage';

class DeleteImageModal extends React.Component {
  componentDidUpdate() {
    const { isDeleted, clear, fetchProject, projectId } = this.props;
    if (isDeleted) {
      fetchProject({ id: projectId });
      clear();
    }
  }

  render() {
    const { show, closeModal, deleteImage, projectId, imageId } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Delete Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete image?</Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={() => closeModal()}>
              No
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteImage(projectId, imageId);
                closeModal();
              }}
            >
              Yes
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

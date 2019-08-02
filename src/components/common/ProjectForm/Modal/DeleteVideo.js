import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import { actions } from '@containers/Project/DeleteVideo';

class DeleteVideoModal extends React.Component {
  componentDidUpdate() {
    const { isDeleted, clear, fetchProject, projectId } = this.props;
    if (isDeleted) {
      fetchProject({ id: projectId });
      clear();
    }
  }

  render() {
    const { show, closeModal, deleteVideo, projectId, videoId } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Delete Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete video?</Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={() => closeModal()}>
              No
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteVideo(projectId, videoId);
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
  const { deleteVideo } = state.project;

  return {
    showSuccessAlert: deleteVideo.showSuccessAlert,
    isDeleted: deleteVideo.success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteVideo: (projectId, videoId) => dispatch(actions.deleteAction({ projectId, videoId })),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteVideoModal);

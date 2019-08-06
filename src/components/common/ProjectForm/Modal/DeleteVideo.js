import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import { actions } from '@containers/Project/DeleteVideo';

class DeleteVideoModal extends React.Component {
  componentDidUpdate() {
    const { isDeleted, clear, fetchProject, projectId, closeModal } = this.props;
    if (isDeleted) {
      fetchProject({ id: projectId });
      clear();
      closeModal();
    }
  }

  render() {
    const { show, closeModal, deleteVideo, projectId, videoId, isFetching } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Delete Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete video?</Modal.Body>
          <Modal.Footer>
            <Button disabled={isFetching} variant="link" onClick={() => closeModal()}>
              No
            </Button>
            <Button
              variant="danger"
              disabled={isFetching}
              onClick={() => {
                deleteVideo(projectId, videoId);
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
  const { deleteVideo } = state.project;

  return {
    showSuccessAlert: deleteVideo.showSuccessAlert,
    isDeleted: deleteVideo.success,
    isFetching: deleteVideo.isFetching,
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

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { DeleteVideoModal, CreateVideoModal, UpdateVideoModal } from './Modal';
import Table from './VideosTable';

class ProjectVideosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
      projectId: null,
      updateVideoInitialValues: {},
      showDeleteModal: false,
      showCreateModal: false,
      showEditModal: false,
    };
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.closeCreateModal = this.closeCreateModal.bind(this);
  }

  componentDidMount() {
    const { projectId } = this.props;
    if (projectId) this.setState({ projectId });
  }

  openEditModal(videoId, published, title, source, url) {
    const { showEditModal } = this.state;
    const { updateVideoInitialValues } = this.props;
    if (!showEditModal) {
      this.setState({
        showEditModal: true,
        videoId,
        updateVideoInitialValues: Object.assign({}, updateVideoInitialValues, {
          published,
          title,
          source,
          url,
        }),
      });
    }
  }

  closeEditModal() {
    const { showEditModal } = this.state;
    if (showEditModal) this.setState({ showEditModal: false });
  }

  openCreateModal() {
    const { showCreateModal } = this.state;
    if (!showCreateModal) this.setState({ showCreateModal: true });
  }

  closeCreateModal() {
    const { showCreateModal } = this.state;
    if (showCreateModal) this.setState({ showCreateModal: false });
  }

  openDeleteModal(videoId) {
    const { showDeleteModal } = this.state;
    if (!showDeleteModal) this.setState({ showDeleteModal: true, videoId });
  }

  closeDeleteModal() {
    const { showDeleteModal } = this.state;
    if (showDeleteModal) this.setState({ showDeleteModal: false });
  }

  render() {
    const { videos, isFetching, fetchProject } = this.props;
    const {
      videoId,
      projectId,
      showDeleteModal,
      showCreateModal,
      showEditModal,
      updateVideoInitialValues,
    } = this.state;

    return (
      <>
        <Button
          onClick={() => this.openCreateModal()}
          style={{ marginBottom: '20px' }}
          variant="primary"
        >
          Add new
        </Button>
        <Table
          openDeleteModal={this.openDeleteModal}
          openEditModal={this.openEditModal}
          videos={videos}
          isFetching={isFetching}
        />
        <DeleteVideoModal
          fetchProject={fetchProject}
          action={this.deleteAction}
          videoId={videoId}
          projectId={projectId}
          closeModal={this.closeDeleteModal}
          show={showDeleteModal}
        />
        <CreateVideoModal
          show={showCreateModal}
          projectId={projectId}
          closeModal={this.closeCreateModal}
          fetchProject={fetchProject}
        />
        <UpdateVideoModal
          fetchProject={fetchProject}
          show={showEditModal}
          projectId={projectId}
          videoId={videoId}
          initialValues={updateVideoInitialValues}
          closeModal={this.closeEditModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { updateVideo } = state.project;

  return {
    updateVideoInitialValues: updateVideo.image,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ProjectVideosForm);

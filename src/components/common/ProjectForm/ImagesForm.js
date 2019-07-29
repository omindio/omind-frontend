import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { DeleteImageModal, CreateImageModal, EditImageModal } from './Modal';
import Table from './ImagesTable';

class ProjectImagesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: null,
      projectId: null,
      imageValues: {},
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

  openEditModal(imageId, published, title, main, coverPage) {
    const { showEditModal } = this.state;
    if (!showEditModal) {
      const imageValues = { published, title, main, coverPage };
      this.setState({ showEditModal: true, imageId, imageValues });
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

  openDeleteModal(imageId) {
    const { showDeleteModal } = this.state;
    if (!showDeleteModal) this.setState({ showDeleteModal: true, imageId });
  }

  closeDeleteModal() {
    const { showDeleteModal } = this.state;
    if (showDeleteModal) this.setState({ showDeleteModal: false });
  }

  render() {
    const { images, isFetching, showSuccessAlert, fetchProject } = this.props;
    const {
      imageId,
      projectId,
      showDeleteModal,
      showCreateModal,
      showEditModal,
      imageValues,
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
          showSuccessAlert={showSuccessAlert}
          openDeleteModal={this.openDeleteModal}
          openEditModal={this.openEditModal}
          images={images}
          isFetching={isFetching}
        />
        <DeleteImageModal
          fetchProject={fetchProject}
          action={this.deleteAction}
          imageId={imageId}
          projectId={projectId}
          closeModal={this.closeDeleteModal}
          show={showDeleteModal}
        />
        <CreateImageModal
          show={showCreateModal}
          projectId={projectId}
          closeModal={this.closeCreateModal}
          fetchProject={fetchProject}
        />
        <EditImageModal
          show={showEditModal}
          projectId={projectId}
          imageId={imageId}
          image={imageValues}
          closeModal={this.closeEditModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { deleteImage } = state.project;

  return {
    showSuccessAlert: deleteImage.showSuccessAlert,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ProjectImagesForm);

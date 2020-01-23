import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { DeleteVideoModal, CreateVideoModal, UpdateVideoModal } from './Modal';
import Table from './VideosTable';

class ProductVideosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
      productId: null,
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
    const { productId } = this.props;
    if (productId) this.setState({ productId });
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
    const { videos, isFetching, fetchProduct } = this.props;
    const {
      videoId,
      productId,
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
          fetchProduct={fetchProduct}
          action={this.deleteAction}
          videoId={videoId}
          productId={productId}
          closeModal={this.closeDeleteModal}
          show={showDeleteModal}
        />
        <CreateVideoModal
          show={showCreateModal}
          productId={productId}
          closeModal={this.closeCreateModal}
          fetchProduct={fetchProduct}
        />
        <UpdateVideoModal
          fetchProduct={fetchProduct}
          show={showEditModal}
          productId={productId}
          videoId={videoId}
          initialValues={updateVideoInitialValues}
          closeModal={this.closeEditModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { updateVideo } = state.product;

  return {
    updateVideoInitialValues: updateVideo.image,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ProductVideosForm);

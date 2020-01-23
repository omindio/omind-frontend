import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { DeleteImageModal, CreateImageModal, UpdateImageModal } from './Modal';
import Table from './ImagesTable';

class ProductImagesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: null,
      productId: null,
      updateImageInitialValues: {},
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

  openEditModal(imageId, published, title, main, coverPage, path) {
    const { showEditModal } = this.state;
    const { updateImageInitialValues } = this.props;
    if (!showEditModal) {
      this.setState({
        showEditModal: true,
        imageId,
        updateImageInitialValues: Object.assign({}, updateImageInitialValues, {
          published,
          title,
          main,
          coverPage,
          path,
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

  openDeleteModal(imageId) {
    const { showDeleteModal } = this.state;
    if (!showDeleteModal) this.setState({ showDeleteModal: true, imageId });
  }

  closeDeleteModal() {
    const { showDeleteModal } = this.state;
    if (showDeleteModal) this.setState({ showDeleteModal: false });
  }

  render() {
    const { images, isFetching, fetchProduct } = this.props;
    const {
      imageId,
      productId,
      showDeleteModal,
      showCreateModal,
      showEditModal,
      updateImageInitialValues,
    } = this.state;
    // console.log(imageValues);
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
          images={images}
          isFetching={isFetching}
        />
        <DeleteImageModal
          fetchProduct={fetchProduct}
          action={this.deleteAction}
          imageId={imageId}
          productId={productId}
          closeModal={this.closeDeleteModal}
          show={showDeleteModal}
        />
        <CreateImageModal
          show={showCreateModal}
          productId={productId}
          closeModal={this.closeCreateModal}
          fetchProduct={fetchProduct}
        />
        <UpdateImageModal
          fetchProduct={fetchProduct}
          show={showEditModal}
          productId={productId}
          imageId={imageId}
          initialValues={updateImageInitialValues}
          closeModal={this.closeEditModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { updateImage } = state.product;

  return {
    updateImageInitialValues: updateImage.image,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ProductImagesForm);

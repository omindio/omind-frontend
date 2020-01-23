import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { actions, validationSchema } from '@containers/Product/UpdateVideo';
import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text, Checkbox } from '@components/common/Field';

class UpdateVideoModal extends React.Component {
  componentDidUpdate() {
    const { isUpdated, fetchProduct, productId } = this.props;
    if (isUpdated) {
      fetchProduct({ id: productId });
      // clear();
    }
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      show,
      closeModal,
      productId,
      videoId,
      initialValues,
      isFetching,
      update,
      error,
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Edit Video</Modal.Title>
          </Modal.Header>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
              update(Object.assign({}, values, { productId, id: videoId }));
            }}
            enableReinitialize="true"
            render={({ values, handleSubmit, handleChange, errors, touched }) => (
              <>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Modal.Body>
                    <StateErrorHandler error={error} />

                    <Text
                      label="Title *"
                      placeholder="Title"
                      name="title"
                      type="text"
                      autoComplete="off"
                      disabled={isFetching}
                      value={values.title}
                      onChange={handleChange}
                      isInvalid={touched.title && errors.title}
                    />

                    <Text
                      label="URL *"
                      placeholder="URL"
                      name="url"
                      type="text"
                      autoComplete="off"
                      disabled={isFetching}
                      value={values.url}
                      onChange={handleChange}
                      isInvalid={touched.url && errors.url}
                    />

                    <Text
                      label="Source"
                      placeholder="Source"
                      name="source"
                      type="text"
                      autoComplete="off"
                      disabled={isFetching}
                      value={values.source}
                      onChange={handleChange}
                      isInvalid={touched.source && errors.source}
                    />
                    <Checkbox
                      labeltext="Published"
                      label=""
                      placeholder=""
                      name="published"
                      disabled={isFetching}
                      value={values.published}
                      onChange={handleChange}
                      isInvalid={touched.published && errors.published}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="link" onClick={() => closeModal()}>
                      Cancel
                    </Button>
                    <Button disabled={isFetching} type="submit">
                      {isFetching ? 'Wait...' : 'Save'}
                    </Button>
                  </Modal.Footer>
                </Form>
              </>
            )}
          />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { updateVideo } = state.product;
  const { isFetching, success, error, successClear, video } = updateVideo;

  return {
    isFetching,
    isUpdated: success,
    successClear,
    error,
    video,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: values => dispatch(actions.createAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateVideoModal);

import React from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { actions, validationSchema } from '@containers/Project/UpdateImage';
import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text, Checkbox, File } from '@components/common/Field';

class EditImageModal extends React.Component {
  componentDidUpdate() {
    const { isCreated, clear, fetchProject, projectId } = this.props;
    if (isCreated) {
      fetchProject({ id: projectId });
      clear();
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
      projectId,
      imageId,
      image,
      isFetching,
      update,
      error,
      successClear,
    } = this.props;
    console.log(image);
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Edit Image</Modal.Title>
          </Modal.Header>

          <Formik
            initialValues={image}
            validationSchema={validationSchema}
            onSubmit={values => {
              update(Object.assign({}, values, { projectId, id: imageId }));
            }}
            enableReinitialize="true"
            render={({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
              <>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Modal.Body>
                    <StateErrorHandler error={error} />
                    <Alert show={successClear} key={0} variant="success">
                      Image modified successfully.
                    </Alert>
                    <File
                      label="Image"
                      placeholder="Image"
                      name="imageFile"
                      autoComplete="off"
                      disabled={isFetching}
                      onChange={event => {
                        setFieldValue('imageFile', event.currentTarget.files[0]);
                      }}
                      isInvalid={touched.imageFile && errors.imageFile}
                    />
                    <Text
                      label="Title *"
                      placeholder="Title"
                      name="title"
                      type="text"
                      autoComplete="off"
                      disabled={isFetching}
                      // value={values.title}
                      onChange={handleChange}
                      isInvalid={touched.title && errors.title}
                    />
                    <Checkbox
                      labeltext="Main"
                      label=""
                      placeholder=""
                      name="main"
                      disabled={isFetching}
                      value={values.main}
                      onChange={handleChange}
                      isInvalid={touched.main && errors.main}
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
                    <Checkbox
                      labeltext="Cover Page"
                      label=""
                      placeholder=""
                      name="coverPage"
                      disabled={isFetching}
                      value={values.coverPage}
                      onChange={handleChange}
                      isInvalid={touched.coverPage && errors.coverPage}
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
  const { createImage } = state.project;
  const { isFetching, success, error, image, successClear } = createImage;

  return {
    isFetching,
    isCreated: success,
    successClear,
    error,
    image,
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
)(EditImageModal);

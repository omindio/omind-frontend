import React from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { actions, validationSchema } from '@containers/Project/CreateImage';
import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text, Checkbox, File } from '@components/common/Field';

class CreateImageModal extends React.Component {
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
      image,
      isFetching,
      create,
      error,
      successClear,
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Add new Image</Modal.Title>
          </Modal.Header>

          <Formik
            initialValues={image}
            validationSchema={validationSchema}
            onSubmit={values => {
              create(Object.assign({}, values, { projectId }));
            }}
            enableReinitialize="true"
            render={({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
              <>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Modal.Body>
                    <StateErrorHandler error={error} />
                    <Alert show={successClear} key={0} variant="success">
                      Image created successfully.
                    </Alert>
                    <File
                      label="Image *"
                      placeholder="Image *"
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
                      value={values.title}
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
    create: values => dispatch(actions.createAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateImageModal);

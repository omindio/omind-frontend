import React from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { actions, validationSchema } from '@containers/Project/CreateVideo';
import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text, Checkbox } from '@components/common/Field';

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
      video,
      isFetching,
      create,
      error,
      successClear,
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={() => closeModal()}>
          <Modal.Header>
            <Modal.Title>Add new Video</Modal.Title>
          </Modal.Header>

          <Formik
            initialValues={video}
            validationSchema={validationSchema}
            onSubmit={values => {
              create(Object.assign({}, values, { projectId }));
            }}
            enableReinitialize="true"
            render={({ values, handleSubmit, handleChange, errors, touched }) => (
              <>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Modal.Body>
                    <StateErrorHandler error={error} />
                    <Alert show={successClear} key={0} variant="success">
                      Video created successfully.
                    </Alert>

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
  const { createVideo } = state.project;
  const { isFetching, success, error, image, successClear } = createVideo;

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

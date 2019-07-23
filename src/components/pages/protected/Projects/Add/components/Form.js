import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions, validationSchema } from '@containers/Project/Create';
import { Field } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

class AddForm extends Component {
  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { create, hasError, isFetching, isCreated, project } = this.props;

    return (
      <Formik
        initialValues={project}
        validationSchema={validationSchema}
        onSubmit={values => {
          create(values);
        }}
        render={({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {hasError && <StateErrorHandler error={hasError} />}

            <Alert show={isCreated} key={0} variant="success">
              Employee added successfully. &nbsp;&nbsp;
              <LinkContainer to={`/projects/edit/${project.id}`}>
                <Button variant="primary" size="sm">
                  Edit
                </Button>
              </LinkContainer>
            </Alert>

            <Row>
              <Col xs={12} md={6}>
                <Field.Text
                  label="Name *"
                  placeholder="Name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
                <Field.Select
                  label="Status *"
                  name="status"
                  disabled={isFetching}
                  value={values.status}
                  onChange={setFieldValue}
                  isInvalid={touched.status && errors.status}
                  options={[
                    {
                      id: '1',
                      name: 'Created',
                    },
                  ]}
                />

                <Field.Textarea
                  label="Description *"
                  placeholder="Description"
                  name="description"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={touched.description && errors.description}
                />
                <Field.DatePicker
                  label="Started Date *"
                  name="startedDate"
                  placeholder="Started Date"
                  disabled={isFetching}
                  value={values.startedDate}
                  onChange={setFieldValue}
                  isInvalid={touched.startedDate && errors.startedDate}
                />
                <Field.DatePicker
                  label="Finished Date *"
                  name="finishedDate"
                  placeholder="Finished Date"
                  disabled={isFetching}
                  value={values.finishedDate}
                  onChange={setFieldValue}
                  isInvalid={touched.finishedDate && errors.finishedDate}
                />
              </Col>
              <Col xs={12} md={6}>
                <Field.Text
                  label="Client ID *"
                  placeholder="Client ID"
                  name="client"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.client}
                  onChange={handleChange}
                  isInvalid={touched.client && errors.client}
                />
                <Field.Textarea
                  label="Meta Description"
                  placeholder="Meta Description"
                  name="metaDescription"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.metaDescription}
                  onChange={handleChange}
                  isInvalid={touched.metaDescription && errors.metaDescription}
                />
                <Field.Checkbox
                  labeltext="Published"
                  label=""
                  placeholder=""
                  name="published"
                  disabled={isFetching}
                  value={values.published}
                  onChange={handleChange}
                  isInvalid={touched.published && errors.published}
                />
                <Field.Tags
                  label="Tags"
                  placeholder="Add new Tag"
                  name="tags"
                  disabled={isFetching}
                  value={values.tags}
                  onChange={setFieldValue}
                  isInvalid={touched.published && errors.published}
                />
              </Col>
            </Row>

            <Row>
              <Col className="text-right">
                <Button disabled={isFetching} className="btn text-left" type="submit">
                  {isFetching ? 'Wait...' : 'Save'}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const { create } = state.project;
  const { isFetching, success, error } = create;

  return {
    isFetching,
    isCreated: success,
    hasError: error,
    project: create.project,
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
)(AddForm);

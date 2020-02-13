import React, { Component } from 'react';
import { Formik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { StateErrorHandler } from '@utils/ErrorHandler';

import * as Field from '@components/common/Field';

class ProductInformationForm extends Component {
  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      onSubmit,
      error,
      isFetching,
      initialValues,
      validationSchema,
      id,
      isUpdated,
      productUpdated,
      addForm,
    } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize="true"
        onSubmit={values => {
          if (id) {
            onSubmit(Object.assign({}, values, { id }));
          } else {
            onSubmit(values);
          }
        }}
        render={({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {error && <StateErrorHandler error={error} />}
            <Row>
              <Col xs={12} md={6}>
                {id && (
                  <Field.Readonly
                    label="Slug"
                    name="slug"
                    value={isUpdated ? productUpdated.slug : initialValues.slug}
                  />
                )}

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
                {!addForm && (
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
                )}

                <Field.Tags
                  label="Tags"
                  placeholder="Add new Tag"
                  name="tags"
                  disabled={isFetching}
                  value={values.tags}
                  onChange={setFieldValue}
                  isInvalid={touched.published && errors.published}
                />
                {id && (
                  <>
                    <Field.Readonly label="ID" name="id" value={initialValues.id} />
                    <Field.Readonly
                      label="Registration Date"
                      name="createdDate"
                      value={initialValues.createdDate}
                    />
                  </>
                )}

                <Field.Text
                  label="Web"
                  placeholder="Web"
                  name="webUrl"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.webUrl}
                  onChange={handleChange}
                  isInvalid={touched.webUrl && errors.webUrl}
                />
                <Field.Text
                  label="Facebook"
                  placeholder="Facebook"
                  name="facebookUrl"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.facebookUrl}
                  onChange={handleChange}
                  isInvalid={touched.facebookUrl && errors.facebookUrl}
                />
                <Field.Text
                  label="Linkedin"
                  placeholder="Linkedin"
                  name="linkedinUrl"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.linkedinUrl}
                  onChange={handleChange}
                  isInvalid={touched.linkedinUrl && errors.linkedinUrl}
                />
                <Field.Text
                  label="Instagram"
                  placeholder="Instagram"
                  name="instagramUrl"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.instagramUrl}
                  onChange={handleChange}
                  isInvalid={touched.instagramUrl && errors.instagramUrl}
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

export default ProductInformationForm;

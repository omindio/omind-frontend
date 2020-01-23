import React from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions, validationSchema } from '@containers/Product/Create';
import { ProductForm } from '@components/common';
// import { StateErrorHandler } from '@utils/ErrorHandler';

const AddForm = ({ create, error, isFetching, isCreated, product, clear }) => {
  return (
    <React.Fragment>
      <Alert show={isCreated} key={0} variant="success">
        Product added successfully. &nbsp;&nbsp;
        <LinkContainer to={`/manage/products/edit/${product.id}`}>
          <Button variant="primary" size="sm">
            Edit
          </Button>
        </LinkContainer>
      </Alert>
      <ProductForm.Information
        addForm
        clear={clear}
        validationSchema={validationSchema}
        initialValues={product}
        isFetching={isFetching}
        error={error}
        onSubmit={create}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { create } = state.product;
  const { isFetching, success, error } = create;

  return {
    isFetching,
    isCreated: success,
    error,
    product: create.product,
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

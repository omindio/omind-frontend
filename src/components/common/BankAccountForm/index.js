import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/BankAccount/Update';
import { getOneAction } from '@containers/BankAccount/GetOne';

import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text } from '../Field';

class BankAccountForm extends Component {
  componentDidMount() {
    const { fetch, userId } = this.props;
    fetch({ user: userId });
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      update,
      userId,
      bankAccountFetched,
      isFetchingData,
      isFetchingUpdate,
      updateError,
      fetchDataError,
      isUpdated,
    } = this.props;

    if (fetchDataError) return <StateErrorHandler error={fetchDataError} />;

    return (
      <Formik
        initialValues={bankAccountFetched}
        validationSchema={validationSchema}
        onSubmit={values => {
          update(Object.assign({}, values, { user: userId }));
        }}
        enableReinitialize="true"
        render={({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {updateError && <StateErrorHandler error={updateError} />}

            <Alert show={isUpdated} key={0} variant="success">
              Bank Account updated successfully.
            </Alert>

            <Text
              label="Bank Name *"
              placeholder="Bank Name"
              name="bankName"
              type="text"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.bankName}
              onChange={handleChange}
              isInvalid={touched.bankName && errors.bankName}
            />

            <Text
              label="Iban *"
              placeholder="Iban"
              name="iban"
              type="text"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.iban}
              onChange={handleChange}
              isInvalid={touched.iban && errors.iban}
            />

            <Text
              label="Vat"
              placeholder="Vat"
              name="vat"
              type="text"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.vat}
              onChange={handleChange}
              isInvalid={touched.vat && errors.vat}
            />

            <Text
              label="Swift"
              placeholder="Swift"
              name="swift"
              type="text"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.swift}
              onChange={handleChange}
              isInvalid={touched.swift && errors.swift}
            />

            <Text
              label="Route Number"
              placeholder="Route Number"
              name="routeNumber"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.routeNumber}
              onChange={handleChange}
              isInvalid={touched.routeNumber && errors.routeNumber}
            />

            <Row>
              <Col className="text-right">
                <Button
                  disabled={isFetchingUpdate || isFetchingData}
                  className="btn text-left"
                  type="submit"
                >
                  {isFetchingUpdate || isFetchingData ? 'Wait...' : 'Save'}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      />
    );
  }
}

BankAccountForm.propTypes = {
  userId: PropTypes.string.isRequired,
  isFetchingUpdate: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { update, getOne } = state.bankAccount;
  const { isFetching, success, error } = update;

  return {
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
    bankAccountFetched: getOne.bankAccount,
    isFetchingUpdate: isFetching,
    isUpdated: success,
    updateError: error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetch: values => dispatch(getOneAction(values)),
    update: values => dispatch(actions.updateAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BankAccountForm);

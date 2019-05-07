import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Loader } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

import { actions, validationSchema } from '@containers/User/Update';

import { Form } from './components';

class Profile extends Component {
  componentDidMount() {
    const { dispatch, userId, token } = this.props;
    dispatch(actions.loadDataAction({ id: userId, token }));
    /*
    dispatch(userProfileActions.loadDataAction({ id: userId, token }));
    */
  }

  render() {
    const { user, isFetching, error, dispatch, userId, token } = this.props;

    if (isFetching || !user) return <Loader />;

    const { name, lastName, email } = user;
    return (
      <div>
        <Helmet>
          <title>Omind - Profile</title>
        </Helmet>

        <h3>Profile</h3>

        <StateErrorHandler error={error} />

        <Form
          initialValues={{
            name,
            lastName,
            email,
            password: '',
            passwordConfirmation: '',
          }}
          userId={userId}
          dispatch={dispatch}
          token={token}
          actions={actions}
          validationSchema={validationSchema}
        />
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { update } = state.user;

  const { userId, token } = login;
  const { user, isFetching, error } = update;

  console.log(update);

  return {
    userId,
    token,
    user,
    isFetching,
    error,
  };
};

export default connect(mapStateToProps)(Profile);

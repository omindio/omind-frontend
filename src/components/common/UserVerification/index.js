import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';

import { actions as verificationActions } from '@containers/User/Verification';
import { actions as resetActions } from '@containers/User/VerificationReset';
import Loader from '../Loader';

class UserVerification extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  componentDidUpdate() {
    const { token, isReset, isVerified, verify, fetchingVerification } = this.props;
    if (isReset && !isVerified && !fetchingVerification) verify(token);
  }

  handleClick() {
    const { user, reset } = this.props;
    reset(user.email);
  }

  render() {
    const { user, isVerified, fetchingVerification, fetchingReset, isFetchingData } = this.props;

    if (isFetchingData || !user) return <Loader />;

    return (
      <React.Fragment>
        {user.isVerified === true || isVerified === true ? (
          <Badge variant="info">User is verified.</Badge>
        ) : (
          <div>
            <p>User needs to be verified:</p>
            <Button
              variant="success"
              disabled={fetchingVerification || fetchingReset}
              onClick={this.handleClick}
            >
              {fetchingVerification || fetchingReset ? 'Wait...' : 'Verify'}
            </Button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { verification, verificationReset } = state.user;

  return {
    isVerified: verification.success,
    fetchingVerification: verification.isFetching,
    token: verificationReset.token,
    fetchingReset: verificationReset.isFetching,
    isReset: verificationReset.success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verify: token => dispatch(verificationActions.verifyAction(token)),
    reset: email => dispatch(resetActions.resetAction(email)),
    clear: () => {
      dispatch(verificationActions.clearAction());
      dispatch(resetActions.clearAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserVerification);

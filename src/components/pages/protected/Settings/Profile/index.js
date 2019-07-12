import React from 'react';
import { connect } from 'react-redux';

import { Role } from '@utils/Auth';
import { ClientProfile, UserProfile, EmployeeProfile } from './components';

const Profile = props => {
  const { role } = props;
  let profileComponent;

  switch (role) {
    case Role.Admin:
      profileComponent = <UserProfile />;
      break;
    case Role.Client:
      profileComponent = <ClientProfile />;
      break;
    case Role.Employee:
      profileComponent = <EmployeeProfile />;
      break;
    default:
      profileComponent = <UserProfile />;
      break;
  }
  return <div>{profileComponent}</div>;
};

const mapStateToProps = state => {
  const { login } = state.auth;

  return {
    role: login.userRole,
  };
};
export default connect(
  mapStateToProps,
  {},
)(Profile);

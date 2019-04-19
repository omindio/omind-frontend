import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authActions } from 'containers/Auth';

const Logout = props => {
  const { isAuthenticated, history, dispatch } = props;
  // check is user is authenticated and push to profile
  if (!isAuthenticated) {
    history.push('/');
  }

  dispatch(authActions.logoutAction());

  return null;
};

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { authReducer } = state;
  const { isAuthenticated } = authReducer;
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps)(Logout);

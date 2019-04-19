import { Component } from 'react';
import { connect } from 'react-redux';

import { authActions } from '../../../containers/Auth';

class Logout extends Component {
    render () {
        const { isAuthenticated, history, dispatch } = this.props;
        //check is user is authenticated and push to profile
        if (!isAuthenticated) {
            history.push('/');
        }

        dispatch(authActions.logoutAction());
        //history.push('/login');

        return null;
    }
}

function mapStateToProps (state) {
    const { authReducer } = state;
    const { isAuthenticated } = authReducer;
    return {
        isAuthenticated
    };
}

export default connect(mapStateToProps)(Logout);

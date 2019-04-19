import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

//routes
import AppRoute from '@routes';

//components
import Nav from '@components/common/Nav';
import AuthNav from '@components/common/AuthNav';

const history = createBrowserHistory();

class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return (
            <Router history={history}>
                <div>
                    <Nav isAuthenticated={isAuthenticated} />
                    {isAuthenticated && <AuthNav />}

                    <AppRoute />
                </div>
            </Router>
        );
    }
}
/*
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string,
}
*/
//export default App;

function mapStateToProps (state) {
    const { authReducer } = state;
    const { isAuthenticated, error } = authReducer;
    return {
        isAuthenticated,
        error
    };
}

export default connect(mapStateToProps)(App);

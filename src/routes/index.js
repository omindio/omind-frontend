import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@components/pages/Home';
import Proyects from '@components/pages/Proyects';
import Contact from '@components/pages/Contact';
import Profile from '@components/pages/Profile';
import Login from '@components/pages/Login';
import Logout from '@components/pages/Logout';

import { PrivateRoute } from '@utils/Auth';

class AppRoute extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/proyects" component={Proyects} />
                <Route path="/contact" component={Contact} />

                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />

                <PrivateRoute path="/profile" component={Profile} />
            </Switch>
        );
    }
}

export default AppRoute;

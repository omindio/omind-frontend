import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'components/pages/Home';
import Proyects from 'components/pages/Proyects';
import Contact from 'components/pages/Contact';
import Profile from 'components/pages/Profile';
import Login from 'components/pages/Login';
import Logout from 'components/pages/Logout';
import NotFound from 'components/pages/NotFound';

import { PrivateRoute } from 'utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/proyects" component={Proyects} />
      <Route path="/contact" component={Contact} />

      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

      <PrivateRoute path="/profile" component={Profile} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;

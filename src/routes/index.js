import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Proyects, Contact, Profile, Login, NotFound } from 'components/pages';

import { PrivateRoute } from 'utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/proyects" component={Proyects} />
      <Route path="/contact" component={Contact} />

      <Route path="/login" component={Login} />

      <PrivateRoute path="/profile" allowedRoles={['Admin', 'User']} component={Profile} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;

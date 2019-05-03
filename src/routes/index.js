import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Proyects, Contact, UserProfile, Login, NotFound } from '@components/pages';

import { PrivateRoute, Role } from '@utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/proyects" component={Proyects} />
      <Route path="/contact" component={Contact} />

      <Route path="/login" component={Login} />

      <PrivateRoute
        path="/profile"
        allowedRoles={[Role.Admin, Role.User]}
        component={UserProfile}
      />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;

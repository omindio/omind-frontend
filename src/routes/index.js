import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Proyects,
  Contact,
  User,
  Login,
  Dashboard,
  Settings,
  NotFound,
} from '@components/pages';

import { ProtectedRoute, Role } from '@utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/proyects" component={Proyects} />
      <Route path="/contact" component={Contact} />

      <Route path="/login" component={Login} />

      <ProtectedRoute
        path="/profile"
        allowedRoles={[Role.Admin, Role.User]}
        component={User.Profile}
      />

      <ProtectedRoute
        path="/dashboard"
        allowedRoles={[Role.Admin, Role.User]}
        component={Dashboard}
      />

      <ProtectedRoute
        path="/settings"
        allowedRoles={[Role.Admin, Role.User]}
        component={Settings.Profile}
      />

      <ProtectedRoute path="/users" allowedRoles={[Role.Admin]} component={User.List} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;

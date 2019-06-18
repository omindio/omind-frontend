import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Proyects,
  Contact,
  Users,
  Login,
  Dashboard,
  Settings,
  Products,
  NotFound,
} from '@components/pages';

import { ProtectedRoute, Role } from '@utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/proyects" component={Proyects} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />

      <Route path="/login" component={Login} />

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

      <ProtectedRoute path="/users/edit/:id" allowedRoles={[Role.Admin]} component={Users.Edit} />
      <ProtectedRoute path="/users/add" allowedRoles={[Role.Admin]} component={Users.Add} />
      <ProtectedRoute path="/users" allowedRoles={[Role.Admin]} component={Users.List} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;

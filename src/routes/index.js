import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  PublicProjects,
  Contact,
  Users,
  Clients,
  Employees,
  Projects,
  Login,
  Dashboard,
  Settings,
  Products,
  NotFound,
  CookiePolicy,
} from '@components/pages';

import { ProtectedRoute, Role } from '@utils/Auth';

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/our-work/:slug" component={PublicProjects.Info} />
      <Route path="/our-work" component={PublicProjects.Index} />
      <Route path="/products/:slug" component={Products.Info} />
      <Route path="/products" component={Products.Index} />
      <Route path="/contact" component={Contact} />
      <Route path="/cookies-policy" component={CookiePolicy} />
      <Route path="/login" component={Login} />

      <ProtectedRoute
        path="/dashboard"
        allowedRoles={[Role.Admin, Role.Client, Role.Employee]}
        component={Dashboard}
      />

      <ProtectedRoute
        path="/settings"
        allowedRoles={[Role.Admin, Role.Client, Role.Employee]}
        component={Settings.Profile}
      />

      <ProtectedRoute path="/users/edit/:id" allowedRoles={[Role.Admin]} component={Users.Edit} />
      <ProtectedRoute path="/users/add" allowedRoles={[Role.Admin]} component={Users.Add} />
      <ProtectedRoute path="/users" allowedRoles={[Role.Admin]} component={Users.Todo} />

      <ProtectedRoute
        path="/clients/edit/:id"
        allowedRoles={[Role.Admin]}
        component={Clients.Edit}
      />
      <ProtectedRoute path="/clients/add" allowedRoles={[Role.Admin]} component={Clients.Add} />
      <ProtectedRoute path="/clients" allowedRoles={[Role.Admin]} component={Clients.Todo} />

      <ProtectedRoute
        path="/employees/edit/:id"
        allowedRoles={[Role.Admin]}
        component={Employees.Edit}
      />
      <ProtectedRoute path="/employees/add" allowedRoles={[Role.Admin]} component={Employees.Add} />
      <ProtectedRoute path="/employees" allowedRoles={[Role.Admin]} component={Employees.Todo} />

      <ProtectedRoute
        path="/projects/edit/:id"
        allowedRoles={[Role.Admin]}
        component={Projects.Edit}
      />
      <ProtectedRoute path="/projects/add" allowedRoles={[Role.Admin]} component={Projects.Add} />
      <ProtectedRoute path="/projects" allowedRoles={[Role.Admin]} component={Projects.Todo} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AppRoute;

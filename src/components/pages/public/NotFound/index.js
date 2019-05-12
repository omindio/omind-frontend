import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Page Not Found.</title>
    </Helmet>
    <h1>Oops!</h1>
    <h3>Page not found</h3>
    <Link to="/">Return to Home Page</Link>
  </React.Fragment>
);

export default NotFound;

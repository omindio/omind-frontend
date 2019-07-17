import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

class GoogleAnalytics extends Component {
  componentDidMount() {
    const { location } = this.props;
    this.logPageChange(location.pathname, location.search);
  }

  componentDidUpdate({ location: prevLocation }) {
    const {
      location: { pathname, search },
    } = this.props;
    const isDifferentPathname = pathname !== prevLocation.pathname;
    const isDifferentSearch = search !== prevLocation.search;

    if (isDifferentPathname || isDifferentSearch) {
      this.logPageChange(pathname, search);
    }
  }

  logPageChange(pathname, search = '') {
    const page = pathname + search;
    const { location } = window;
    const { options } = this.props;
    ReactGA.set({
      page,
      location: `${location.origin}${page}`,
      ...options,
    });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  // options: PropTypes.object,
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options = {}) => {
  // const env = window._env_ || {};
  // const env = process.env || {};
  const isGAEnabled = !!process.env.GA_TRACKING_ID;

  if (isGAEnabled) {
    ReactGA.initialize(process.env.GA_TRACKING_ID, {
      debug: process.env.GA_DEBUG === 'true',
      ...options,
    });
  }

  return isGAEnabled;
};

export default {
  GoogleAnalytics,
  RouteTracker,
  init,
};

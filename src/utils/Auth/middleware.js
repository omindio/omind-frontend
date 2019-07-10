import { logoutAction } from '@containers/Auth/Logout';

const middleware = store => next => action => {
  const { isAuthenticated, tokenExpires } = store.getState().auth.login;

  if (isAuthenticated) {
    const currentDate = new Date().getTime() / 1000;

    if (tokenExpires < currentDate) {
      next(logoutAction());
    }
  }
  next(action);
};

export default middleware;

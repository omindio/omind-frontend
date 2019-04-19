import { LOGIN_REQUEST, LOGOUT_REQUEST } from './auth.types';

export const loginAction = creds => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    };
};

export const logoutAction = (message = '') => {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true,
        message
    };
};

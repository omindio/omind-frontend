import axios from 'axios';

const API_ENDPOINT = `${process.env.API_URL}/users/auth`;

export const loginService = async params => {
    return axios
        .post(API_ENDPOINT, params)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            return token;
        })
        .catch(err => {
            throw err.response.data;
        });
};

export const logoutService = async () => {
    localStorage.removeItem('token');
};

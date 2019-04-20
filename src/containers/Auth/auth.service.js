import axios from 'axios';
import jwt from 'jsonwebtoken';

const API_ENDPOINT = `${process.env.API_URL}/users/auth`;

/*
TODO: Thin about call User action and save role, token and tokenexpires inside.
*/

export const loginService = async params => {
  return axios
    .post(API_ENDPOINT, params)
    .then(response => {
      const { token } = response.data;
      const { exp, role, email, name } = jwt.decode(token);
      localStorage.setItem('token', token);
      localStorage.setItem('token_expires', exp);
      return {
        role,
        email,
        name,
      };
    })
    .catch(err => {
      throw err.response.data;
    });
};

export const logoutService = async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('token_expires');
};

import axios from 'axios';
import jwt from 'jsonwebtoken';

const API_ENDPOINT = `${process.env.API_URL}/users/auth`;

/*
TODO: Thin about call User action and save role, token and tokenexpires inside.
*/

const loginService = async params => {
  return axios
    .post(API_ENDPOINT, params)
    .then(response => {
      const { token } = response.data;
      const { id, exp, role, email, name } = jwt.decode(token);

      return {
        user: {
          id,
          role,
          name,
          email,
        },
        token,
        tokenExpires: exp,
      };
    })
    .catch(err => {
      throw err.response.data;
    });
};

export default loginService;

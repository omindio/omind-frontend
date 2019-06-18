import axios from 'axios';

import { UnauthorizedError } from '@utils/Error';

import { UserNotFoundError, UserVerifiedError } from '../_Error';

const api = async email => {
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/users/confirm-registration/reset-token/${email}`;
  const headers = {
    headers: { Authorization: `Bearer ${bearerToken}` },
  };
  let response;
  try {
    response = await axios.get(API_URL, headers);
    const { token } = response.data;
    return token;
  } catch (err) {
    const classesMapping = {
      UserNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
    };
    response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const reset = async email => {
  try {
    return await api(email);
  } catch (err) {
    throw err;
  }
};

export default reset;

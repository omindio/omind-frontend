import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { UserNotFoundError, UserVerifiedError } from '../_Error';

const api = async token => {
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/users/confirm-registration/${token}`;
  const headers = {
    headers: { Authorization: `Bearer ${bearerToken}` },
  };
  let response;
  try {
    return await axios.get(API_URL, headers);
  } catch (err) {
    const classesMapping = {
      UserNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
      TooManyRequestsError,
    };
    response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const verify = async token => {
  try {
    return await api(token);
  } catch (err) {
    throw err;
  }
};

export default verify;

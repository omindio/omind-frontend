import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { UserNotFoundError, UserVerifiedError } from '../_Error';

const api = async values => {
  const { page, limit } = values;
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/users/${page}/${limit}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;
  try {
    response = await axios.get(API_URL, headers);
    const { pages, current, users } = response.data;

    return {
      pages,
      current,
      users,
    };
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

const getAll = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default getAll;

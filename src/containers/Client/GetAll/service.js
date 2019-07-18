import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { ClientNotFoundError } from '../_Error';

const api = async values => {
  const { page, limit } = values;
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/clients/${page}/${limit}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;
  try {
    response = await axios.get(API_URL, headers);
    const { pages, current, clients } = response.data;

    return {
      pages,
      current,
      clients,
    };
  } catch (err) {
    const classesMapping = {
      ClientNotFoundError,
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

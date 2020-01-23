import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { ProductNotFoundError } from '../_Error';

const api = async values => {
  const { id } = values;
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/products/${id}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(API_URL, headers);
    return response.data;
  } catch (err) {
    const classesMapping = {
      ProductNotFoundError,
      UnauthorizedError,
      TooManyRequestsError,
    };
    const response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const getOne = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default getOne;

import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { BankAccountNotFoundError } from '../_Error';

const api = async values => {
  const { user } = values;
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/users/bank-account/${user}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(API_URL, headers);
    return response.data;
  } catch (err) {
    const classesMapping = {
      UnauthorizedError,
      BankAccountNotFoundError,
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

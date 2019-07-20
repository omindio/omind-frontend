import axios from 'axios';

import {
  ValidationSchemaError,
  UnauthorizedError,
  UnauthorizedActionError,
  TooManyRequestsError,
} from '@utils/Error';

import { BankAccountAlreadyExistsError, BankAccountNotFoundError } from '../_Error';

const api = async values => {
  const { id } = values;
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/bank-accounts/${id}`;

  const headers = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  try {
    const response = await axios.patch(API_URL, values, headers);
    return response.data;
  } catch (err) {
    const classesMapping = {
      BankAccountAlreadyExistsError,
      BankAccountNotFoundError,
      UnauthorizedError,
      ValidationSchemaError,
      TooManyRequestsError,
      UnauthorizedActionError,
    };
    const response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const update = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default update;

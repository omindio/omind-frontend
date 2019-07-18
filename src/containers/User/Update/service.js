import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import {
  EmailAlreadyExistsError,
  SamePasswordError,
  UserNotFoundError,
  UserVerifiedError,
} from '../_Error';

const api = async values => {
  const { id } = values;
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/users/${id}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.patch(API_URL, values, headers);

    const { name, lastName, email } = response.data;
    return {
      name,
      lastName,
      email,
    };
  } catch (err) {
    const classesMapping = {
      EmailAlreadyExistsError,
      SamePasswordError,
      UserNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
      ValidationSchemaError,
      TooManyRequestsError,
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

import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError, InvalidRequestMethodError } from '@utils/Error';

import {
  EmailAlreadyExistsError,
  SamePasswordError,
  UserNotFoundError,
  UserVerifiedError,
} from '../_Error';

const api = async (values, method) => {
  const { id, token } = values;
  const API_URL = `${process.env.API_URL}/users/${id}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;

  try {
    switch (method) {
      case 'PATCH':
        response = await axios.patch(API_URL, values, headers);
        break;
      case 'GET':
        response = await axios.get(API_URL, headers);
        break;
      default:
        throw new InvalidRequestMethodError();
    }
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
    };
    response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const loadData = async values => {
  try {
    return await api(values, 'GET');
  } catch (err) {
    throw err;
  }
};

const update = async values => {
  try {
    return await api(values, 'PATCH');
  } catch (err) {
    throw err;
  }
};

export { loadData, update };

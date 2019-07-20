import axios from 'axios';

import {
  ValidationSchemaError,
  UnauthorizedError,
  UnauthorizedActionError,
  TooManyRequestsError,
} from '@utils/Error';

import {
  EmailAlreadyExistsError,
  SamePasswordError,
  UserVerifiedError,
  UserNotFoundError,
} from '@containers/User/_Error';

import { ClientAlreadyExistsError, ClientNotFoundError } from '../_Error';

const api = async values => {
  const { id } = values;
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/clients/${id}`;

  const headers = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const data = new FormData();

    Object.keys(values).map(key => {
      data.append(key, values[key]);
      return null;
    });

    const response = await axios.patch(API_URL, data, headers);
    return response.data;
  } catch (err) {
    const classesMapping = {
      EmailAlreadyExistsError,
      SamePasswordError,
      UserNotFoundError,
      ClientAlreadyExistsError,
      ClientNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
      UnauthorizedActionError,
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

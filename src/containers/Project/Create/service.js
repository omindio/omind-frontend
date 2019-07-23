import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import {
  ProjectAlreadyExistsError,
  ProjectNotFoundError,
  ProjectInvalidDateError,
} from '../_Error';

const api = async values => {
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/projects`;

  const headers = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  try {
    const response = await axios.post(API_URL, values, headers);

    return response.data;
  } catch (err) {
    const classesMapping = {
      ProjectAlreadyExistsError,
      ProjectNotFoundError,
      ProjectInvalidDateError,
      UnauthorizedError,
      ValidationSchemaError,
      TooManyRequestsError,
    };
    const response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const create = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default create;

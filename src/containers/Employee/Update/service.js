import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError } from '@utils/Error';

import {
  EmailAlreadyExistsError,
  SamePasswordError,
  UserVerifiedError,
  UserNotFoundError,
} from '@containers/User/_Error';

import { EmployeeAlreadyExistsError, EmployeeNotFoundError } from '../_Error';

const api = async values => {
  const { id } = values;
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/employees/${id}`;

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
      EmailAlreadyExistsError,
      SamePasswordError,
      UserNotFoundError,
      EmployeeAlreadyExistsError,
      EmployeeNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
      ValidationSchemaError,
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

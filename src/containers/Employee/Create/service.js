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
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/employees`;

  const headers = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  try {
    const response = await axios.post(API_URL, values, headers);

    const { employee, user, verificationToken } = response.data;

    return {
      id: employee.id,
      userId: user.id,
      verificationToken: verificationToken.token,
    };
  } catch (err) {
    const classesMapping = {
      EmployeeAlreadyExistsError,
      EmployeeNotFoundError,
      EmailAlreadyExistsError,
      SamePasswordError,
      UserNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
      ValidationSchemaError,
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

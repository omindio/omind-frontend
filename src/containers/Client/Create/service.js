import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError } from '@utils/Error';

import {
  EmailAlreadyExistsError,
  SamePasswordError,
  UserVerifiedError,
  UserNotFoundError,
} from '@containers/User/_Error';

import { ClientAlreadyExistsError, ClientNotFoundError } from '../_Error';

const api = async values => {
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/clients`;
  const headers = {
    headers: { Authorization: `Bearer ${bearerToken}` },
  };

  try {
    const response = await axios.post(API_URL, values, headers);

    const { user, verificationToken } = response.data;
    const { name, lastName, email, id } = user;
    const { token } = verificationToken;

    return {
      name,
      lastName,
      email,
      id,
      verificationToken: token,
    };
  } catch (err) {
    const classesMapping = {
      ClientAlreadyExistsError,
      ClientNotFoundError,
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

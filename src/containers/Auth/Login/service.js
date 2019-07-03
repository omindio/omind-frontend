import axios from 'axios';
import jwt from 'jsonwebtoken';
import { ValidationSchemaError, UnauthorizedError } from '@utils/Error';

import { UnauthorizedAccessError, UnverifiedUserError } from '../_Error';

const API_ENDPOINT = `${process.env.API_URL}/auth`;

// TODO: FIX STORAGE
const api = async values => {
  try {
    const response = await axios.post(API_ENDPOINT, values);

    const { token } = response.data;
    const { id, role, name, lastName, email, exp } = jwt.decode(token);
    localStorage.setItem('token', token);

    return {
      userName: name,
      userLastName: lastName,
      userEmail: email,
      userId: id,
      userRole: role,
      // token,
      tokenExpires: exp,
    };
  } catch (err) {
    const classesMapping = {
      UnauthorizedAccessError,
      UnverifiedUserError,
      ValidationSchemaError,
      UnauthorizedError,
    };
    const response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const login = async values => {
  try {
    const response = await api(values);
    return response;
  } catch (err) {
    throw err;
  }
};

export default login;
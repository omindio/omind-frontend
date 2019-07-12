import axios from 'axios';
import jwt from 'jsonwebtoken';
import { ValidationSchemaError, UnauthorizedError } from '@utils/Error';
import { Role } from '@utils/Auth';

import { UnauthorizedAccessError, UnverifiedUserError } from '../_Error';

const API_ENDPOINT = `${process.env.API_URL}/auth`;

// TODO: FIX STORAGE
const api = async values => {
  try {
    const response = await axios.post(API_ENDPOINT, values);

    const { token } = response.data;
    const decoded = jwt.decode(token);

    const { id, role, name, lastName, email, exp } = decoded;

    const data = {
      userName: name,
      userLastName: lastName,
      userEmail: email,
      userId: id,
      userRole: role,
      tokenExpires: exp,
    };

    switch (role) {
      case Role.Admin:
        break;
      case Role.Client:
        data.clientId = decoded.clientId;
        break;
      case Role.Employee:
        data.employeeId = decoded.employeeId;
        break;
      default:
        break;
    }
    localStorage.setItem('token', token);

    return data;
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

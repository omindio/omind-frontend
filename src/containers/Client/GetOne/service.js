import axios from 'axios';

import { UnauthorizedError } from '@utils/Error';

import { UserVerifiedError, UserNotFoundError } from '@containers/User/_Error';
import { ClientNotFoundError } from '../_Error';

const api = async values => {
  const { id } = values;
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/clients/${id}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;

  try {
    response = await axios.get(API_URL, headers);

    const { name, lastName, email, isVerified } = response.data;
    return {
      name,
      lastName,
      email,
      isVerified,
    };
  } catch (err) {
    const classesMapping = {
      UserNotFoundError,
      UserVerifiedError,
      UnauthorizedError,
      ClientNotFoundError,
    };
    response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const getOne = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default getOne;

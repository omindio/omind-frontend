import axios from 'axios';

import { UnauthorizedError, UnauthorizedActionError, TooManyRequestsError } from '@utils/Error';

import { EmployeeNotFoundError } from '../_Error';

const api = async id => {
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/employees/${id}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;

  try {
    response = await axios.delete(API_URL, headers);
    return true;
  } catch (err) {
    const classesMapping = {
      EmployeeNotFoundError,
      UnauthorizedError,
      UnauthorizedActionError,
      TooManyRequestsError,
    };
    response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const deleteService = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default deleteService;

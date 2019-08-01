import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { ProjectNotFoundError } from '../_Error';

const api = async values => {
  const { id } = values;
  const API_URL = `${process.env.API_URL}/public/projects/${id}`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    const classesMapping = {
      ProjectNotFoundError,
      UnauthorizedError,
      TooManyRequestsError,
    };
    const response = err.response.data;
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

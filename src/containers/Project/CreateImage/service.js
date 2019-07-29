import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import {
  CoverPageImageAlreadyExistsError,
  ImageNotFoundError,
  MainImageAlreadyExistsError,
} from '../_Error';

const api = async values => {
  const { projectId } = values;
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/projects/${projectId}/images`;

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

    const response = await axios.post(API_URL, data, headers);

    return response.data;
  } catch (err) {
    const classesMapping = {
      CoverPageImageAlreadyExistsError,
      ImageNotFoundError,
      MainImageAlreadyExistsError,
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

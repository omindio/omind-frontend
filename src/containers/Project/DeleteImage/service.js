import axios from 'axios';

import {
  ValidationSchemaError,
  UnauthorizedError,
  UnauthorizedActionError,
  TooManyRequestsError,
} from '@utils/Error';

import { ProjectNotFoundError, ProjectIsPublishedError } from '../_Error';

const api = async ({ projectId, imageId }) => {
  const token = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/projects/${projectId}/images/${imageId}`;
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let response;

  try {
    response = await axios.delete(API_URL, headers);
    return true;
  } catch (err) {
    const classesMapping = {
      ProjectIsPublishedError,
      ValidationSchemaError,
      ProjectNotFoundError,
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

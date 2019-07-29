import axios from 'axios';

import {
  ValidationSchemaError,
  UnauthorizedError,
  UnauthorizedActionError,
  TooManyRequestsError,
} from '@utils/Error';

import { ClientNotFoundError } from '@containers/Client/_Error';

import {
  ProjectAlreadyExistsError,
  ProjectNotFoundError,
  ProjectInvalidDateError,
  CoverPageImageAlreadyExistsError,
  MainImageAlreadyExistsError,
} from '../_Error';

const api = async values => {
  const { id } = values;
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/projects/${id}`;

  const headers = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  try {
    const { tags } = values;

    const tagsStr = tags.length > 0 ? tags.join(',') : null;

    const response = await axios.patch(
      API_URL,
      Object.assign({}, values, {
        tags: tagsStr,
        client: Object.hasOwnProperty.call(values.client, 'id') ? values.client.id : values.client,
      }),
      headers,
    );
    return response.data;
  } catch (err) {
    const classesMapping = {
      ProjectAlreadyExistsError,
      ProjectNotFoundError,
      ProjectInvalidDateError,
      UnauthorizedError,
      CoverPageImageAlreadyExistsError,
      MainImageAlreadyExistsError,
      ValidationSchemaError,
      TooManyRequestsError,
      UnauthorizedActionError,
      ClientNotFoundError,
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

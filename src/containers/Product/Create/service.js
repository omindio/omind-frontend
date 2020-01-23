import axios from 'axios';

import { ValidationSchemaError, UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import {
  ProductAlreadyExistsError,
  ProductNotFoundError,
  ProductInvalidDateError,
} from '../_Error';

const api = async values => {
  const bearerToken = localStorage.getItem('token');
  const API_URL = `${process.env.API_URL}/products`;

  const headers = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  try {
    const { tags } = values;

    const tagsStr = tags.length > 0 ? tags.join(',') : null;

    const response = await axios.post(
      API_URL,
      Object.assign({}, values, {
        tags: tagsStr,
      }),
      headers,
    );

    return response.data;
  } catch (err) {
    const classesMapping = {
      ProductAlreadyExistsError,
      ProductNotFoundError,
      ProductInvalidDateError,
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

import axios from 'axios';

import { UnauthorizedError, TooManyRequestsError } from '@utils/Error';

import { ProductNotFoundError } from '../_Error';

const api = async values => {
  const { page, limit } = values;
  const API_URL = `${process.env.API_URL}/public/products/${page}/${limit}`;
  let response;
  try {
    response = await axios.get(API_URL);
    const { pages, current, products } = response.data;

    return {
      pages,
      current,
      products,
    };
  } catch (err) {
    const classesMapping = {
      ProductNotFoundError,
      UnauthorizedError,
      TooManyRequestsError,
    };
    response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const getAll = async values => {
  try {
    return await api(values);
  } catch (err) {
    throw err;
  }
};

export default getAll;

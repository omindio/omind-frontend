import axios from 'axios';
import { ValidationSchemaError, TooManyRequestsError } from '@utils/Error';

const api = async values => {
  try {
    const API_URL = `${process.env.API_URL}/contact/send`;

    return await axios.post(API_URL, values);
  } catch (err) {
    const classesMapping = {
      ValidationSchemaError,
      TooManyRequestsError,
    };
    const response = err.response.data;
    throw new classesMapping[response.type](response.message);
  }
};

const contact = async values => {
  try {
    const response = await api(values);
    return response;
  } catch (err) {
    throw err;
  }
};

export default contact;

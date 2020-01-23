import { PRODUCT_GET_ONE_REQUEST } from './types';

const getOneAction = values => {
  return {
    type: PRODUCT_GET_ONE_REQUEST,
    values,
  };
};

export default getOneAction;

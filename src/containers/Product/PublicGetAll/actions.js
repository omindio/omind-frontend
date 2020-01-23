import { PRODUCT_PUBLIC_GET_ALL_REQUEST } from './types';

const getPublicAllAction = values => {
  return {
    type: PRODUCT_PUBLIC_GET_ALL_REQUEST,
    values,
  };
};

export default getPublicAllAction;

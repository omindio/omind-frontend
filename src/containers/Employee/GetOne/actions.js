import { EMPLOYEE_GET_ONE_REQUEST } from './types';

const getOneAction = values => {
  return {
    type: EMPLOYEE_GET_ONE_REQUEST,
    values,
  };
};

export default getOneAction;

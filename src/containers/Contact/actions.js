import { CONTACT_REQUEST, CONTACT_CLEAR } from './types';

const clearAction = () => {
  return {
    type: CONTACT_CLEAR,
  };
};

const contactAction = values => {
  return {
    type: CONTACT_REQUEST,
    isFetching: true,
    values,
  };
};

export { contactAction, clearAction };

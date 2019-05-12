import { NAV_OPEN, NAV_CLOSE } from './types';

const openAction = () => {
  return {
    type: NAV_OPEN,
  };
};

const closeAction = () => {
  return {
    type: NAV_CLOSE,
  };
};

export { openAction, closeAction };

import { PROJECT_DELETE_IMAGE_REQUEST, PROJECT_DELETE_IMAGE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_DELETE_IMAGE_CLEAR,
  };
};

const deleteAction = ({ projectId, imageId }) => {
  return {
    type: PROJECT_DELETE_IMAGE_REQUEST,
    projectId,
    imageId,
  };
};

export { deleteAction, clearAction };

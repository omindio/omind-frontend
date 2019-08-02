import { PROJECT_DELETE_VIDEO_REQUEST, PROJECT_DELETE_VIDEO_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_DELETE_VIDEO_CLEAR,
  };
};

const deleteAction = ({ projectId, videoId }) => {
  return {
    type: PROJECT_DELETE_VIDEO_REQUEST,
    projectId,
    videoId,
  };
};

export { deleteAction, clearAction };

import { saga as updateSaga } from './Update';
import { saga as getOneSaga } from './GetOne';
import { saga as getAllSaga } from './GetAll';
import { saga as deleteSaga } from './Delete';
import { saga as createSaga } from './Create';
import { saga as deleteImageSaga } from './DeleteImage';
import { saga as createImageSaga } from './CreateImage';
import { saga as updateImageSaga } from './UpdateImage';

export default {
  updateSaga,
  getOneSaga,
  getAllSaga,
  createSaga,
  deleteSaga,
  deleteImageSaga,
  createImageSaga,
  updateImageSaga,
};

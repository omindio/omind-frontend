import { saga as updateSaga } from './Update';
import { saga as getOneSaga } from './GetOne';
import { saga as getAllSaga } from './GetAll';
import { saga as deleteSaga } from './Delete';
import { saga as createSaga } from './Create';

export default {
  updateSaga,
  getOneSaga,
  getAllSaga,
  createSaga,
  deleteSaga,
};

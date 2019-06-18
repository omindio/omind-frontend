import { saga as updateSaga } from './Update';
import { saga as getOneSaga } from './GetOne';
import { saga as getAllSaga } from './GetAll';
import { saga as deleteSaga } from './Delete';
import { saga as createSaga } from './Create';
import { saga as verificationSaga } from './Verification';
import { saga as verificationResetSaga } from './VerificationReset';

export default {
  updateSaga,
  getOneSaga,
  getAllSaga,
  createSaga,
  deleteSaga,
  verificationSaga,
  verificationResetSaga,
};

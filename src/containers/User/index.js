/*
  TODO: Think about add just Action.
*/
import * as Create from './Create';
import * as Delete from './Delete';
import * as Update from './Update';
import * as GetOne from './GetOne';
import * as GetAll from './GetAll';
import * as Verification from './Verification';
import * as VerificationReset from './VerificationReset';

import reducer from './reducer';
import saga from './saga';

export { Create, Delete, Update, GetOne, GetAll, reducer, saga, Verification, VerificationReset };

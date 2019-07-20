import { AppError } from '@utils/Error';

export default class BankAccountAlreadyExistsError extends AppError {
  constructor(message) {
    super(message || 'Client already exists.', 404);
  }
}

import { AppError } from '@utils/Error';

export default class BankAccountNotFoundError extends AppError {
  constructor(message) {
    super(message || 'Client not found.', 404);
  }
}

import { AppError } from '@utils/Error';

export default class ClientlreadyExistsError extends AppError {
  constructor(message) {
    super(message || 'Client already exists.', 404);
  }
}

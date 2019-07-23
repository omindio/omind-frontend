import { AppError } from '@utils/Error';

export default class ClientNotFoundError extends AppError {
  constructor(message) {
    super(message || 'Client not found.', 404);
  }
}

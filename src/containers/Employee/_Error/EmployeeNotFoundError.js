import { AppError } from '@utils/Error';

export default class ClientNotFound extends AppError {
  constructor(message) {
    super(message || 'Client not found.', 404);
  }
}

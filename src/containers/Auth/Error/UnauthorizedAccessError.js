import { AppError } from '@utils/Error';

export default class UnauthorizedAccessError extends AppError {
  constructor(message) {
    super(message || 'Invalid credentials.', 401);
  }
}

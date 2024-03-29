import AppError from './AppError';

export default class UnauthorizedActionError extends AppError {
  constructor(message) {
    super(message || 'Unauthorized Error.', 401);
  }
}

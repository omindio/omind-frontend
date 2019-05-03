import AppError from './AppError';

export default class InvalidRequestMethodError extends AppError {
  constructor(message) {
    super(message || 'Invalid Request Method.', 500);
  }
}

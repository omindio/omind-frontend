import AppError from './AppError';

export default class TooManyRequestsError extends AppError {
  constructor(message) {
    super(message || 'Too many requests.', 429);
  }
}

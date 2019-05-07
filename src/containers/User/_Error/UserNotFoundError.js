import { AppError } from '@utils/Error';

export default class UserNotFound extends AppError {
  constructor(message) {
    super(message || 'User not found.', 404);
  }
}

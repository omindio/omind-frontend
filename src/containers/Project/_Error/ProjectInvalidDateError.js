import { AppError } from '@utils/Error';

export default class ProjectInvalidDateError extends AppError {
  constructor(message) {
    super(message || 'Invalid date format', 404);
  }
}

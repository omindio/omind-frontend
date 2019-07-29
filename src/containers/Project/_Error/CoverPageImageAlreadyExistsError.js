import { AppError } from '@utils/Error';

export default class CoverPageImageAlreadyExistsError extends AppError {
  constructor(message) {
    super(message || 'Cover Page Image already exists.', 404);
  }
}

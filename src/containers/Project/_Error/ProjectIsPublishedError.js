import { AppError } from '@utils/Error';

export default class ProjectIsPublishedError extends AppError {
  constructor(message) {
    super(message || 'Can not remove a published Project.', 404);
  }
}

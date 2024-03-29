import { AppError } from '@utils/Error';

export default class ProductIsPublishedError extends AppError {
  constructor(message) {
    super(message || 'Can not remove a published Product.', 404);
  }
}

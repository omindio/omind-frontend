import { AppError } from '@utils/Error';

export default class ProductNotFoundError extends AppError {
  constructor(message) {
    super(message || 'Product not found.', 404);
  }
}

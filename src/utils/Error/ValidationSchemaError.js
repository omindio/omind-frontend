import AppError from './AppError';

export default class ValidationSchemaError extends AppError {
  constructor(error) {
    super(error || 'Error in validation Schema.', 400);
  }
}

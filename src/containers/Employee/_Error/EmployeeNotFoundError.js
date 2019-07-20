import { AppError } from '@utils/Error';

export default class EmployeeNotFound extends AppError {
  constructor(message) {
    super(message || 'Employee not found.', 404);
  }
}

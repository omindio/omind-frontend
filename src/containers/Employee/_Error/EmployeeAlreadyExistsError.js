import { AppError } from '@utils/Error';

export default class EmployeereadyExistsError extends AppError {
  constructor(message) {
    super(message || 'Employeee already exists.', 404);
  }
}

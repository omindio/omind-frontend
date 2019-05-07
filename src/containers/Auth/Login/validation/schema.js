import * as Yup from 'yup';

const emailSchema = Yup.string()
  .email()
  .lowercase()
  .min(4)
  .max(62);
const passwordSchema = Yup.string().min(8);

const loginSchema = Yup.object().shape({
  email: emailSchema.required(),
  password: passwordSchema.required(),
});

export default loginSchema;

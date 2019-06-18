import * as Yup from 'yup';

const nameSchema = Yup.string()
  .min(3)
  .max(50);
const lastNameSchema = Yup.string()
  .min(3)
  .max(50);
const emailSchema = Yup.string()
  .email()
  .lowercase()
  .min(4)
  .max(62);
const passwordSchema = Yup.string().min(8);

const Schema = Yup.object().shape({
  name: nameSchema.required(),
  lastName: lastNameSchema.required(),
  email: emailSchema.required(),
  password: passwordSchema.required(),
  passwordConfirmation: passwordSchema
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required(),
});

export default Schema;

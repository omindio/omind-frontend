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

const userProfileSchema = Yup.object().shape({
  name: nameSchema.required(),
  lastName: lastNameSchema.required(),
  email: emailSchema.required(),
  password: passwordSchema,
  passwordConfirmation: passwordSchema.oneOf([Yup.ref('password'), null], 'Passwords must match.'),
});

export default userProfileSchema;

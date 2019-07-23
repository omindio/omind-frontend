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

const workPositionSchema = Yup.string()
  .min(2)
  .max(50);
const dniSchema = Yup.string()
  .min(9)
  .max(11);
const fiscalAddressSchema = Yup.string();
const phoneSchema = Yup.string()
  .min(9)
  .max(11);
const socialLinkedinSchema = Yup.string().url();
const socialFacebookSchema = Yup.string().url();
const socialInstagramSchema = Yup.string().url();
const webSchema = Yup.string().url();

const Schema = Yup.object().shape({
  workPosition: workPositionSchema.optional(),
  dni: dniSchema.optional(),
  fiscalAddress: fiscalAddressSchema.optional(),
  phone: phoneSchema.optional(),
  socialLinkedin: socialLinkedinSchema.optional(),
  socialFacebook: socialFacebookSchema.optional(),
  socialInstagram: socialInstagramSchema.optional(),
  web: webSchema.optional(),
  name: nameSchema.required(),
  lastName: lastNameSchema.required(),
  email: emailSchema.required(),
  password: passwordSchema.required(),
  passwordConfirmation: passwordSchema
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required(),
});

export default Schema;

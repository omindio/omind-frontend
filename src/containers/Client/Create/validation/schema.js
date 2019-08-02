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

const companyNameSchema = Yup.string()
  .min(2)
  .max(50);
const descriptionSchema = Yup.string();
const cifSchema = Yup.string()
  .min(9)
  .max(11);
const fiscalAddressSchema = Yup.string();
const phoneSchema = Yup.string()
  .min(9)
  .max(11);
const publishedSchema = Yup.boolean();
const socialLinkedinSchema = Yup.string().url();
const socialFacebookSchema = Yup.string().url();
const socialInstagramSchema = Yup.string().url();
const webSchema = Yup.string().url();

const Schema = Yup.object().shape({
  companyName: companyNameSchema.required(),
  description: descriptionSchema.required(),
  cif: cifSchema.optional(),
  fiscalAddress: fiscalAddressSchema.optional(),
  phone: phoneSchema.optional(),
  published: publishedSchema.optional(),
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

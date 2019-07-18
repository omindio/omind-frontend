import * as Yup from 'yup';

const nameSchema = Yup.string()
  .min(3)
  .max(50);

const emailSchema = Yup.string()
  .email()
  .lowercase()
  .min(4)
  .max(62);

const subjectSchema = Yup.string()
  .min(2)
  .max(62);

const messageSchema = Yup.string()
  .min(10)
  .max(300);

const Schema = Yup.object().shape({
  name: nameSchema.required(),
  email: emailSchema.required(),
  subject: subjectSchema.required(),
  message: messageSchema.required(),
});

export default Schema;

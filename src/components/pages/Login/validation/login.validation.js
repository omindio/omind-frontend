import Joi from 'joi';

const emailSchema = Joi.string()
  .email()
  .lowercase()
  .min(4)
  .max(62);
const passwordSchema = Joi.string()
  .min(8)
  .strip();

const createLoginSchema = Joi.object().keys({
  email: emailSchema.required(),
  password: passwordSchema.required(),
});

export default createLoginSchema;

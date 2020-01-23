import * as Yup from 'yup';

const titleSchema = Yup.string()
  .min(2)
  .max(50);
const publishedSchema = Yup.boolean();
const urlSchema = Yup.string().url();
const sourceSchema = Yup.string()
  .min(2)
  .max(50);

const Schema = Yup.object().shape({
  title: titleSchema.required(),
  published: publishedSchema.optional(),
  url: urlSchema.required(),
  source: sourceSchema.optional(),
});

export default Schema;

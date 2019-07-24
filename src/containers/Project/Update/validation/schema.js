import * as Yup from 'yup';

const nameSchema = Yup.string()
  .min(2)
  .max(50);
const descriptionSchema = Yup.string()
  .min(10)
  .max(1000);
const metaDescriptionSchema = Yup.string()
  .min(2)
  .max(250);
const startedDateSchema = Yup.date();
const finishedDateSchema = Yup.date();
const publishedSchema = Yup.boolean();
const statusSchema = Yup.string()
  .min(1)
  .max(2);
const clientSchema = Yup.string();
const tagsSchema = Yup.array();

const Schema = Yup.object().shape({
  name: nameSchema.required(),
  description: descriptionSchema.required(),
  metaDescription: metaDescriptionSchema.optional(),
  startedDate: startedDateSchema.required(),
  finishedDate: finishedDateSchema.min(Yup.ref('startedDate')).required(),
  published: publishedSchema.required(),
  status: statusSchema.required(),
  client: clientSchema.required(),
  tags: tagsSchema.optional(),
});

export default Schema;

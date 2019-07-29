import * as Yup from 'yup';

const titleSchema = Yup.string()
  .min(2)
  .max(50);
const publishedSchema = Yup.boolean();
const mainSchema = Yup.boolean();
const coverPageSchema = Yup.boolean();
// TODO: think about add regex for image
const imageFileSchema = Yup.string();

const Schema = Yup.object().shape({
  title: titleSchema.required(),
  published: publishedSchema.optional(),
  main: mainSchema.optional(),
  coverPage: coverPageSchema.optional(),
  imageFile: imageFileSchema.optional(),
});

export default Schema;

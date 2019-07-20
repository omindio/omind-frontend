import * as Yup from 'yup';

const vatSchema = Yup.string()
  .min(2)
  .max(50);
const swiftSchema = Yup.string()
  .min(2)
  .max(50);
const ibanSchema = Yup.string();
const routeNumberSchema = Yup.string()
  .min(2)
  .max(50);
const bankNameSchema = Yup.string()
  .min(2)
  .max(50);

const Schema = Yup.object().shape({
  vat: vatSchema.optional(),
  swift: swiftSchema.optional(),
  iban: ibanSchema.optional(),
  routeNumber: routeNumberSchema.optional(),
  bankName: bankNameSchema.optional(),
});

export default Schema;

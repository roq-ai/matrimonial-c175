import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  age: yup.number().integer().nullable(),
  location: yup.string().nullable(),
  occupation: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});

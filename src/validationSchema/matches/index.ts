import * as yup from 'yup';

export const matchValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  profile_id: yup.string().nullable().required(),
});

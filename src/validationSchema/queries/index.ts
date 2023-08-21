import * as yup from 'yup';

export const queryValidationSchema = yup.object().shape({
  issue: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const suggestionValidationSchema = yup.object().shape({
  match_id: yup.string().nullable().required(),
  profile_id: yup.string().nullable().required(),
});

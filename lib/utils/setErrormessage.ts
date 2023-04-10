import { FieldErrors } from 'react-hook-form';
import { TFormValues } from '../../components/auth/login';
import { EMAIL_MESSAGE, PASSWORD_MESSAGE } from '../../constants/contstant';

type TSetErrorMessages = {
  errors: FieldErrors<TFormValues>;
  setEmailErrorMessage: (
    value: React.SetStateAction<string | undefined>
  ) => void;
  setPasswordErrorMessage: (
    value: React.SetStateAction<string | undefined>
  ) => void;
};

export const setErrorMessages = (
  errors: FieldErrors<TFormValues>,
  setEmailErrorMessage: (
    value: React.SetStateAction<string | undefined>
  ) => void,
  setPasswordErrorMessage: typeof setEmailErrorMessage
) => {
  if (errors.email?.type === 'required') {
    setEmailErrorMessage(EMAIL_MESSAGE.INPUT_EMAIL);
  } else if (errors.email?.type === 'pattern') {
    setEmailErrorMessage(EMAIL_MESSAGE.INVALID_EMAIL_FORMAT);
  } else if (errors.password?.message) {
    setPasswordErrorMessage(errors.password?.message);
  } else if (errors.password?.type === 'required') {
    setPasswordErrorMessage(PASSWORD_MESSAGE.INPUT_PASSWORD);
  } else if (errors.password?.type === 'pattern') {
    setPasswordErrorMessage(PASSWORD_MESSAGE.PASSWORD_PATTERN_MESSAGE);
  } else if (errors.password?.type === 'minLength') {
    setPasswordErrorMessage(errors.password?.message);
  } else {
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
  }
};

import React, { Dispatch, SetStateAction } from 'react';
import { userApi } from '../../../../services/api';
import { FieldValues, UseFormGetValues } from 'react-hook-form';
import { EmailFormatError } from '../../../../lib/errors';
import { ERRORS } from '../../../../constants/contstant';
import { EmailValidationContainer } from './style';
import withErrorBoundary from '../../../hoc/withErrorBoundary';
import ErrorBoundary from '../../../errorBoundary';

type TProps = {
  getValues: UseFormGetValues<FieldValues>;
  emailState: boolean;
  setEmailState: Dispatch<SetStateAction<boolean>>;
};

export const EmailVaidation = ({
  getValues,
  emailState,
  setEmailState
}: TProps) => {
  const handleEmailValidation = async () => {
    const email = getValues('email');

    const response = await userApi.emailValidation(email);
    if (response.status === 200) {
      setEmailState(true);
      // alert user to continue
    } else if (response.status === 409) {
      throw new EmailFormatError(ERRORS.EMAIL_ALREADY_TAKEN);
    }
    const errorMessage =
      response.status === 409
        ? ERRORS.EMAIL_ALREADY_TAKEN
        : response && response.data === ERRORS.INVALID_EMAIL_MESSAGE
        ? ERRORS.INVALID_EMAIL_FORMAT
        : ERRORS.GENERIC_ERROR;
    throw new EmailFormatError(errorMessage);
  };

  return (
    <EmailValidationContainer
      className="login__wrapper-verification login__wrapper-email__verification"
      onClick={handleEmailValidation}
      emailState={emailState}
    >
      이메일 중복체크
    </EmailValidationContainer>
  );
};

export default withErrorBoundary(
  EmailVaidation,
  ErrorBoundary,
  'EmailValidationBoundary'
);

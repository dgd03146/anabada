import React from 'react';
import { userApi } from '../../../../../services/api';

import {
  EMAIL_MESSAGE,
  TOAST_MESSAGE
} from '../../../../../constants/contstant';
import { EmailValidationContainer } from './style';
import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';
import { TEmailProps } from '..';

type TEmailValidationProps = Omit<TEmailProps, 'register'>;

export const EmailVaidation = ({
  getValues,
  email,
  setEmail,
  dirtyFields,
  errors
}: TEmailValidationProps) => {
  const handleEmailValidation = async () => {
    if (errors.email?.type === 'pattern') {
      toast.error('올바른 이메일 형식이 아닙니다.');
      return;
    }

    try {
      const emailValue = getValues('email');
      const response = await userApi.emailValidation(emailValue);

      if (response.status === 200) {
        dirtyFields.email = false;
        setEmail(true);
        // FIXME: errors.email null로 바꿔야 하나?
        errors.email = undefined;
        toast.success(EMAIL_MESSAGE.EMAIL_CHECKED_MESSAGE);
      } else if (response.status === 409) {
        throw new Error(EMAIL_MESSAGE.EMAIL_ALREADY_TAKEN);
      } else {
        throw new Error(TOAST_MESSAGE.GENERIC_ERROR);
      }
    } catch (err) {
      if (err instanceof ApiError) {
        toast.error(err.message);
      }
    }
  };

  return (
    <EmailValidationContainer
      onClick={handleEmailValidation}
      emailState={email}
    >
      이메일 중복체크
    </EmailValidationContainer>
  );
};

export default EmailVaidation;

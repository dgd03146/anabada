import React, { Dispatch, SetStateAction } from 'react';
import { userApi } from '../../../../services/api';
import { FieldErrors, FieldValues, UseFormGetValues } from 'react-hook-form';
import { EmailFormatError } from '../../../../lib/errors';
import { TOAST_MESSAGE } from '../../../../constants/contstant';
import { EmailValidationContainer } from './style';

import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';

type TErrors = {
  email: {
    type: string;
  } | null;
};

type TProps = {
  getValues: UseFormGetValues<FieldValues>;
  emailState: boolean;
  setEmailState: Dispatch<SetStateAction<boolean>>;
  errors: FieldErrors<Record<string, any>>;
  dirtyFields: Record<string, boolean>;
};

export const EmailVaidation = ({
  getValues,
  emailState,
  setEmailState,
  dirtyFields,
  errors
}: TProps) => {
  const handleEmailValidation = async () => {
    if (errors.email?.type === 'pattern') {
      toast.error('올바른 이메일 형식이 아닙니다.');
      return;
    }

    try {
      const email = getValues('email');
      const response = await userApi.emailValidation(email);

      if (response.status === 200) {
        dirtyFields.email = false;
        setEmailState(true);
        // FIXME: errors.email null로 바꿔야 하나?
        errors.email = undefined;
        toast.success(TOAST_MESSAGE.EMAIL_CHECKED_MESSAGE);
      } else if (response.status === 409) {
        throw new Error(TOAST_MESSAGE.EMAIL_ALREADY_TAKEN);
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
      className="login__wrapper-verification login__wrapper-email__verification"
      onClick={handleEmailValidation}
      emailState={emailState}
    >
      이메일 중복체크
    </EmailValidationContainer>
  );
};

export default EmailVaidation;

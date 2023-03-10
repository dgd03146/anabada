import React, { Dispatch, SetStateAction } from 'react';
import { TOAST_MESSAGE } from '../../../../constants/contstant';
import { emailValidationRules } from '../../../../lib/utils/formValidation';
import FormInput from '../../../common/formInput';
import EmailValidation from './emailValidation';
import { ErrorSpan, InputName } from '../style';
import { TSignupProps } from '..';

export type TEmailProps = TSignupProps & {
  email: boolean;
  setEmail: Dispatch<SetStateAction<boolean>>;
};

const Email = ({
  errors,
  email,
  setEmail,
  dirtyFields,
  register,
  getValues
}: TEmailProps) => {
  const emailErrorMessages = {
    required: errors.email && errors.email.message,
    pattern: TOAST_MESSAGE.INVALID_EMAIL_FORMAT,
    validate: !email && errors.email && errors.email.message
  };

  type FormErrorType = keyof typeof emailErrorMessages;

  const isErrorType = (key: string): key is FormErrorType => {
    return key in emailErrorMessages;
  };

  return (
    <>
      <InputName>
        <span>이메일</span>
      </InputName>
      {errors.email?.type && (
        <ErrorSpan>
          {isErrorType(errors.email.type) &&
            emailErrorMessages[errors.email.type]}
        </ErrorSpan>
      )}
      <FormInput
        errors={errors?.email}
        type="email"
        placeholder="이메일"
        {...register('email', {
          ...emailValidationRules,
          validate: () => email || TOAST_MESSAGE.EMAIL_CHECK_MESSAGE
        })}
      ></FormInput>
      <EmailValidation
        dirtyFields={dirtyFields}
        errors={errors}
        getValues={getValues}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
};

export default Email;

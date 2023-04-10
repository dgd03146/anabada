import React, { Dispatch, SetStateAction, useState } from 'react';
import { TSignupProps } from '..';
import { TOAST_MESSAGE } from '../../../../constants/contstant';
import { passwordValidationRules } from '../../../../lib/utils/formValidation';
import { FormInput } from '../../style';
import { ErrorSpan, InputName } from '../style';
import { PasswordBox, PasswordType } from './style';

type TPasswordProps = Pick<TSignupProps, 'errors' | 'register'>;

type TPassword = {
  type: string;
  visible: boolean;
};

const Password = ({ errors, register }: TPasswordProps) => {
  const [password, setPassword] = useState({
    type: 'password',
    visible: true
  });

  const passwordErrorMessages = {
    required: errors.password && errors.password.message,
    pattern: TOAST_MESSAGE.PASSWORD_PATTERN_MESSAGE,
    validate: !password && errors.password && errors.password.message
  };
  type FormErrorType = keyof typeof passwordErrorMessages;

  const isErrorType = (key: string): key is FormErrorType => {
    return key in passwordErrorMessages;
  };

  const handlePassword = (setType: Dispatch<SetStateAction<TPassword>>) => {
    setType((prev: TPassword) => ({
      type: prev.visible ? 'text' : 'password',
      visible: !prev.visible
    }));
  };

  const passwordIcon = password.visible ? 'visibility' : 'visibility_off';

  const passwordErrorMessage =
    errors.password?.type && isErrorType(errors.password.type)
      ? passwordErrorMessages[errors.password.type]
      : null;

  return (
    <>
      <InputName>
        <span>비밀번호</span>
      </InputName>
      {errors.password ? (
        passwordErrorMessage && <ErrorSpan>{passwordErrorMessage}</ErrorSpan>
      ) : (
        <span className="login__wrapper__password">
          {TOAST_MESSAGE.PASSWORD_PATTERN_MESSAGE}
        </span>
      )}
      <PasswordBox>
        <FormInput
          errors={errors?.password}
          type={password.type}
          placeholder="비밀번호"
          {...register('password', passwordValidationRules)}
        ></FormInput>
        <PasswordType onClick={() => handlePassword(setPassword)}>
          <span className="material-symbols-outlined">{passwordIcon}</span>
        </PasswordType>
      </PasswordBox>
    </>
  );
};

export default Password;

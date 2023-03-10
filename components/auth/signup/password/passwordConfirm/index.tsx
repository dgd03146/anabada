import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  FieldErrorsImpl,
  UseFormGetValues,
  UseFormRegister
} from 'react-hook-form';
import { TSignupProps } from '../..';
import { TSignup } from '../../../../../lib/types/types';
import FormInput from '../../../../common/formInput';
import { ErrorSpan, InputName } from '../../style';
import { PasswordBox, PasswordType } from '../style';

type TPasswordConfirmProps = Omit<TSignupProps, 'dirtyFields'>;

type TPassword = {
  type: string;
  visible: boolean;
};

const PasswordConfirm = ({
  errors,
  register,
  getValues
}: TPasswordConfirmProps) => {
  const [passwordConfirm, setPasswordConfirm] = useState({
    type: 'password',
    visible: true
  });

  const handlePasswordType = (setType: Dispatch<SetStateAction<TPassword>>) => {
    setType((prev: TPassword) => ({
      type: prev.visible ? 'text' : 'password',
      visible: !prev.visible
    }));
  };

  return (
    <>
      <InputName>
        <span>비밀번호 확인</span>
      </InputName>
      {errors.confirmPassword?.type === 'required' && (
        <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan>
      )}
      {errors.confirmPassword?.type === 'validate' && (
        <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan>
      )}
      <PasswordBox>
        <FormInput
          errors={errors.confirmPassword}
          type={passwordConfirm.type}
          placeholder="비밀번호 확인"
          {...register('confirmPassword', {
            required: '비밀번호 확인을 입력해주세요!',
            validate: {
              checked: (value) =>
                getValues('password') === value || '비밀번호가 다릅니다.'
            }
          })}
        ></FormInput>
        <PasswordType onClick={() => handlePasswordType(setPasswordConfirm)}>
          {passwordConfirm.visible ? (
            <span className="material-symbols-outlined">visibility</span>
          ) : (
            <span className="material-symbols-outlined">visibility_off</span>
          )}
        </PasswordType>
      </PasswordBox>
    </>
  );
};

export default PasswordConfirm;

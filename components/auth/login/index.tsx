import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

// import styled from 'styled-components';
import { TUser } from '../../../lib/types/types';
import React from 'react';
import { FormBtn, FormDiv, FormWrapper } from '../style';
import { FormSection, LoginWelcome } from './style';
import Link from 'next/link';
import { FormInput } from '../style';
import {
  emailValidationRules,
  passwordValidationRules
} from '../../../lib/utils/formValidation';

import Image from 'next/image';
import WithAuth from '../../hoc/withAuth';
import { ErrorSpan } from '../signup/style';
import { setErrorMessages } from '../../../lib/utils/setErrormessage';
import { useLogin } from '../../../quries/hooks/user/useLogin';

export type TFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormValues>({
    mode: 'onBlur',
    shouldFocusError: false
  });

  const [emailErrorMessage, setEmailErrorMessage] = useState<string>();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>();

  const { onLogin } = useLogin();

  const onSumbit = async (loginData: TUser) => {
    onLogin(loginData);
  };

  const onError = () => {
    setErrorMessages(errors, setEmailErrorMessage, setPasswordErrorMessage);
  };

  return (
    <>
      <FormWrapper>
        <LoginWelcome>
          <div>
            <Image
              src={'/assets/icons/logo_big.svg'}
              width={208}
              height={79}
              priority
              alt="Logo"
            />
          </div>
        </LoginWelcome>
        <FormDiv>
          <form
            className="login__wrapper-form"
            onSubmit={handleSubmit(onSumbit, onError)}
          >
            <FormInput
              errors={errors.email}
              type="text"
              placeholder="이메일"
              {...register('email', emailValidationRules)}
            ></FormInput>
            {errors.email && <ErrorSpan>{emailErrorMessage}</ErrorSpan>}
            <FormInput
              errors={errors.password}
              type="password"
              placeholder="비밀번호"
              {...register('password', passwordValidationRules)}
            ></FormInput>
            {errors.password && <ErrorSpan>{passwordErrorMessage}</ErrorSpan>}

            <FormBtn type="submit">로그인</FormBtn>
          </form>
          <FormSection>
            <div className="login__wrapper-extra__btn__signup">
              <Link href="/signup">
                <span className="login__wrapper-extra__btn">회원가입</span>
              </Link>
            </div>
          </FormSection>
        </FormDiv>
      </FormWrapper>
    </>
  );
};

export default WithAuth(Login);

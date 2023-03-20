import { useForm } from 'react-hook-form';

// import { userAuth } from '../../shared/api';
import { Cookies } from 'react-cookie';
// import { userThunk } from '../../redux/auth-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
import { TUser } from '../../../lib/types/types';
import { useRouter } from 'next/router';
import React from 'react';
import { FormBtn, FormDiv, FormWrapper } from '../style';
import { FormSection, LoginWelcome } from './style';
import Link from 'next/link';
import FormInput from '../../common/formInput';
import {
  emailValidationRules,
  passwordValidationRules
} from '../../../lib/utils/formValidation';
import { userApi } from '../../../services/api';
import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../../quries/key';
import {
  EMAIL_MESSAGE,
  LOGIN_MESSAGE,
  PASSWORD_MESSAGE
} from '../../../constants/contstant';
import Image from 'next/image';
import useUser from '../../../quries/hooks/user/useUser';

type TFormValues = {
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

  const router = useRouter();
  const cookies = new Cookies();
  const queryClient = new QueryClient();

  const onSumbit = async (loginData: TUser) => {
    try {
      const getResponse = await userApi.login(loginData);
      // Save token
      cookies.set('refreshToken', getResponse.headers.refreshtoken);
      queryClient.setQueryData(
        [QueryKeys.accessToken],
        getResponse.headers.authorization
      );

      // Get user information
      // TODO: accesstoken으로 유저 정보 받아오는것 같은데?
      const { user } = useUser();

      router.push('/home');
      toast.success(LOGIN_MESSAGE.SUCCESS_LOGIN);
    } catch (err) {
      toast.error(LOGIN_MESSAGE.CHECK_EMAIL_PASSWORD);
    }
  };
  const onError = () => {
    if (errors.email?.type === 'required') {
      toast.error(EMAIL_MESSAGE.INPUT_EMAIL);
    } else if (errors.email?.type === 'pattern') {
      toast.error(EMAIL_MESSAGE.INVALID_EMAIL_FORMAT);
    } else if (errors.password?.type === 'required') {
      toast.error(PASSWORD_MESSAGE.INPUT_PASSWORD);
    }
  };

  return (
    <>
      <FormWrapper>
        <LoginWelcome>
          <div>
            <Image
              src={'/assets/icons/logo_big.svg'}
              width={79}
              height={208}
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
            <FormInput
              errors={errors.password}
              type="password"
              placeholder="비밀번호"
              {...register('password', passwordValidationRules)}
            ></FormInput>
            <FormBtn>로그인</FormBtn>
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

export default Login;

import { useForm } from 'react-hook-form';

// import { userAuth } from '../../shared/api';
import { Cookies } from 'react-cookie';
// import { userThunk } from '../../redux/auth-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
import { TOutletContext, TUser } from '../../../lib/types/types';
import { useRouter } from 'next/router';
import React from 'react';
import { FormBtn, FormDiv, FormWrapper } from '../style';
import { FormSection, LoginWelcome } from './style';
import Link from 'next/link';
import { FormInput } from '../../common/input';
import {
  emailValidationRules,
  passwordValidationRules
} from '../../../lib/utils/formValidation';
import { userApi } from '../../../services/api';

type TFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  // FIXME: 모달을 만들자
  // const { alertHandler } = useOutletContext() as TOutletContext;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormValues>({
    mode: 'onBlur',
    shouldFocusError: false
  });

  const router = useRouter();
  // const dispatch = useDispatch();
  const cookies = new Cookies();

  const onSumbit = async (loginData: TUser) => {
    try {
      const getResponse = await userApi.login(loginData);
      // 토큰 저장
      // FIXME: Next 쿠키로 변경
      cookies.set('refreshToken', getResponse.headers.refreshtoken);
      localStorage.setItem('accessToken', getResponse.headers.authorization);

      // 유저 정보 받아오기
      const getAccessToken = localStorage.getItem('accessToken');
      // FIXME: dispatch(userThunk(getAccessToken));
      router.push('/home');
      // FIXME: alert
      alert('로그인에 성공했습니다');
      // return alertHandler('로그인에 성공했습니다!');
    } catch (err) {
      console.log(err);
      // FIXME: alert
      alert('이메일과 비밀번호를 확인해주세요');
      // return alertHandler('이메일과 비밀번호를 확인해주세요!');
    }
  };
  const onError = () => {
    // errors type에 따라 alertHandler 핸들
    // if (errors.email?.type === 'required') {
    //   alertHandler('이메일을 입력해주세요.');
    // } else if (errors.email?.type === 'pattern') {
    //   alertHandler('형식에 맞게 메일 주소를 입력하세요.');
    // } else if (errors.password?.type === 'required') {
    //   alertHandler('비밀번호를 입력해주세요.');
    // }
  };

  // 로그인한 상태에서 접근 시 차단  FIXME: 고차 컴포넌트로 바꾸기
  useEffect(() => {
    if (localStorage.getItem('accessToken') && cookies.get('refreshToken')) {
      // alertHandler('비정상적인 접근입니다.');
      router.push('/home');
    }
  }, []);

  return (
    <>
      <FormWrapper>
        <LoginWelcome>
          <div>
            <img src="/assets/logo_big.svg" alt=""></img>
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

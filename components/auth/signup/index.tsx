import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router-dom';

import { Cookies } from 'react-cookie';
import { TUser } from '../../../lib/types/types';
import { userApi } from '../../../services/api';
import React from 'react';
import { FormBtn } from '../style';
import {
  ErrorSpan,
  InputName,
  PasswordBox,
  PasswordEye,
  SignupForm,
  SignupWrapper
} from './style';
import { FormInput } from '../../common/input';
import { useRouter } from 'next/router';
import { TOAST_MESSAGE } from '../../../constants/contstant';
import { EmailFormatError } from '../../../lib/errors';
import EmailValidation from './emailValidation';
import withErrorBoundary from '../../hoc/withErrorBoundary';
import ErrorBoundary from '../../errorBoundary';
import NicknameValidation from './nicknameValidation';

// FIXME: alertHandler 다 모달로 변경하기

const SignUp = () => {
  //password type 변경용 state
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: true
  });
  const [passwordConfirmType, setPasswordConfirmType] = useState({
    type: 'password',
    visible: true
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields }
  } = useForm({
    mode: 'all'
  });

  const [nicknameState, setNicknameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  // const { alertHandler } = useOutletContext();
  const cookies = new Cookies();

  const router = useRouter();

  const onSumbit = (signupData: TUser) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const getResponse = (async () => await userApi.signup(signupData))();
      return router.push('/signup/welcome');
    } catch (err) {
      console.log(err);
      // return alertHandler('서버와 통신에 실패했습니다. 다시 시도해주세요.');
    }
  };
  const onError = () => {
    if (!emailState) {
      // return alertHandler('이메일 중복확인을 해주세요.');
    }
    if (!nicknameState) {
      // return alertHandler('닉네임 중복확인을 해주세요.');
    }
    // return alertHandler('유효하지 않은 형식입니다. 다시 확인해주세요.');
  };
  // password
  const handlePasswordType = () => {
    setPasswordType((prev) => {
      if (prev.visible) {
        return { type: 'text', visible: false };
      }
      return { type: 'password', visible: true };
    });
  };
  // password confirm
  const handlePasswordConfirmType = () => {
    setPasswordConfirmType((prev) => {
      if (prev.visible) {
        return { type: 'text', visible: false };
      }
      return { type: 'password', visible: true };
    });
  };

  useEffect(() => {
    setEmailState(!dirtyFields.email);
    setNicknameState(!dirtyFields.nickname);
  }, [dirtyFields.email, dirtyFields.nickname]);

  // 로그인한 상태에서 접근 시 차단
  // FIXME: 고차 컴포넌트로
  useEffect(() => {
    if (localStorage.getItem('accessToken') && cookies.get('refreshToken')) {
      // alertHandler('비정상적인 접근입니다.');
      router.push('/home');
    }
  }, []);

  return (
    <>
      <SignupWrapper>
        <SignupForm emailState={emailState} nicknameState={nicknameState}>
          <form
            className="login__wrapper-form"
            onSubmit={handleSubmit(onSumbit, onError)}
          >
            <InputName>
              <span>이메일</span>
            </InputName>
            {errors.email?.type === 'required' && (
              <ErrorSpan>{errors.email.message}</ErrorSpan>
            )}
            {errors.email?.type === 'pattern' && (
              <ErrorSpan>형식에 맞게 메일 주소를 입력하세요.</ErrorSpan>
            )}
            {errors.email?.type === 'validate' && !emailState && (
              <ErrorSpan>{errors.email.message}</ErrorSpan>
            )}
            <FormInput
              errors={errors?.email}
              type="email"
              placeholder="이메일"
              {...register('email', {
                required: '이메일을 입력해주세요!',

                pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
                validate: () => emailState || '이메일 중복확인을 해주세요!'
              })}
            ></FormInput>
            <EmailValidation
              dirtyFields={dirtyFields}
              errors={errors}
              getValues={getValues}
              emailState={emailState}
              setEmailState={setEmailState}
            />
            <InputName>
              <span>비밀번호</span>
            </InputName>
            {errors.password ? (
              (errors.password?.type === 'required' && (
                <ErrorSpan>{errors.password.message}</ErrorSpan>
              )) ||
              (errors.password?.type === 'pattern' && (
                <ErrorSpan>
                  영어 대문자﹒소문자﹒숫자﹒특수문자!@#$%^&*+를 포함해주세요.
                </ErrorSpan>
              )) ||
              (errors.password?.type === 'minLength' && (
                <ErrorSpan>{errors.password.message}</ErrorSpan>
              )) ||
              (errors.password?.type === 'maxLength' && (
                <ErrorSpan>{errors.password.message}</ErrorSpan>
              ))
            ) : (
              <span className="login__wrapper__password">
                영어 대문자﹒소문자﹒숫자﹒특수문자!@#$%^&*+를 포함해주세요.
              </span>
            )}
            <PasswordBox>
              <FormInput
                errors={errors?.password}
                type={passwordType.type}
                placeholder="비밀번호"
                {...register('password', {
                  required: '비밀번호를 입력해주세요!',
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+])[A-Za-z0-9!@#$%^&*+]{8,20}$/,
                  minLength: {
                    value: 8,
                    message: '8자 이상 입력해주세요.'
                  },
                  maxLength: {
                    value: 20,
                    message: '최대 20자 입니다.'
                  }
                })}
              ></FormInput>
              <PasswordEye onClick={handlePasswordType}>
                {passwordType.visible ? (
                  <span className="material-symbols-outlined">visibility</span>
                ) : (
                  <span className="material-symbols-outlined">
                    visibility_off
                  </span>
                )}
              </PasswordEye>
            </PasswordBox>

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
                type={passwordConfirmType.type}
                placeholder="비밀번호 확인"
                {...register('confirmPassword', {
                  required: '비밀번호 확인을 입력해주세요!',
                  validate: {
                    checked: (value) =>
                      getValues('password') === value || '비밀번호가 다릅니다.'
                  }
                })}
              ></FormInput>
              <PasswordEye onClick={handlePasswordConfirmType}>
                {passwordConfirmType.visible ? (
                  <span className="material-symbols-outlined">visibility</span>
                ) : (
                  <span className="material-symbols-outlined">
                    visibility_off
                  </span>
                )}
              </PasswordEye>
            </PasswordBox>
            <InputName>
              <span>닉네임</span>
            </InputName>
            {errors.nickname?.type === 'required' && (
              <ErrorSpan>{errors.nickname.message}</ErrorSpan>
            )}
            {errors.nickname?.type === 'validate' && (
              <ErrorSpan>{errors.nickname.message}</ErrorSpan>
            )}
            {errors.nickname?.type === 'maxLength' && (
              <ErrorSpan>{errors.nickname.message}</ErrorSpan>
            )}
            <FormInput
              errors={errors?.nickname}
              type="text"
              placeholder="닉네임"
              {...register('nickname', {
                required: '닉네임을 입력해주세요!',
                validate: () => nicknameState || '닉네임 중복확인을 해주세요!',
                maxLength: {
                  value: 8,
                  message: '8글자 이하로 작성해주세요.'
                }
              })}
            ></FormInput>
            <NicknameValidation
              errors={errors}
              getValues={getValues}
              dirtyFields={dirtyFields}
              nicknameState={nicknameState}
              setNicknameState={setNicknameState}
            />
            <FormBtn>회원가입</FormBtn>
          </form>
        </SignupForm>
      </SignupWrapper>
    </>
  );
};

export default SignUp;

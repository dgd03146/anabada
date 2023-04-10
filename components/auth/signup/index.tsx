import { useEffect, useState } from 'react';
import {
  FieldErrorsImpl,
  useForm,
  UseFormGetValues,
  UseFormRegister
} from 'react-hook-form';
import { TSignup } from '../../../lib/types/types';
import { userApi } from '../../../services/api';
import React from 'react';
import { FormBtn } from '../style';
import { SignupForm, SignupWrapper } from './style';
import { useRouter } from 'next/router';
import { TOAST_MESSAGE } from '../../../constants/contstant';
import { toast } from 'react-toastify';
import WithAuth from '../../hoc/withAuth';
import Email from './email';
import Password from './password';
import PasswordConfirm from './password/passwordConfirm';
import Nickname from './nickname';

export type TSignupProps = {
  errors: FieldErrorsImpl<TSignup>;
  register: UseFormRegister<TSignup>;
  getValues: UseFormGetValues<TSignup>;
  dirtyFields: Record<string, boolean>;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields }
  } = useForm<TSignup>({
    mode: 'all'
  });

  const [nickname, setNickname] = useState(false);
  const [email, setEmail] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setEmail(!dirtyFields.email);
    setNickname(!dirtyFields.nickname);
  }, [dirtyFields.email, dirtyFields.nickname]);

  const onSumbit = async (signupData: TSignup) => {
    try {
      await userApi.signup(signupData);
      return router.push('/signup/welcome');
    } catch (err) {
      toast.error(TOAST_MESSAGE.GENERIC_ERROR);
    }
  };

  const onError = () => {
    if (!email) {
      toast.info(TOAST_MESSAGE.EMAIL_CHECK_MESSAGE);
    } else if (!nickname) {
      toast.info(TOAST_MESSAGE.NICKNAME_CHECK_MESSAGE);
    } else {
      toast.error(TOAST_MESSAGE.INVALID_FORM_MESSAGE);
    }
  };

  return (
    <>
      <SignupWrapper>
        <SignupForm email={email} nickname={nickname}>
          <form
            className="login__wrapper-form"
            onSubmit={handleSubmit(onSumbit, onError)}
          >
            <Email
              errors={errors}
              email={email}
              setEmail={setEmail}
              dirtyFields={dirtyFields}
              register={register}
              getValues={getValues}
            />
            <Password errors={errors} register={register} />
            <PasswordConfirm
              errors={errors}
              register={register}
              getValues={getValues}
            />
            <Nickname
              errors={errors}
              nickname={nickname}
              setNickname={setNickname}
              dirtyFields={dirtyFields}
              register={register}
              getValues={getValues}
            />
            <FormBtn>회원가입</FormBtn>
          </form>
        </SignupForm>
      </SignupWrapper>
    </>
  );
};

export default WithAuth(Signup);

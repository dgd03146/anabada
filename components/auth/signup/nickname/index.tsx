import React, { Dispatch, SetStateAction } from 'react';
import { TSignupProps } from '..';
import { FormInput } from '../../style';
import { ErrorSpan, InputName } from '../style';
import NicknameValidation from './nicknameValidation';

export type TNicknameProps = TSignupProps & {
  setNickname: Dispatch<SetStateAction<boolean>>;
  nickname: boolean;
};

const Nickname = ({
  errors,
  nickname,
  getValues,
  dirtyFields,
  register,
  setNickname
}: TNicknameProps) => {
  return (
    <>
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
          validate: () => nickname || '닉네임 중복확인을 해주세요!',
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
        nickname={nickname}
        setNickname={setNickname}
      />
    </>
  );
};

export default Nickname;

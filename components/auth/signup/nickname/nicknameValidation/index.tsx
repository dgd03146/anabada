import React, { Dispatch, SetStateAction } from 'react';
import { NicknameValidationContainer } from './style';
import { userApi } from '../../../../../services/api';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE } from '../../../../../constants/contstant';
import { ApiError } from 'next/dist/server/api-utils';
import { TSignupProps } from '../..';
import { showToast } from '../../../../layout/Toast/style';
import { AxiosError, AxiosResponse } from 'axios';

type TNicknameValidationProps = Omit<TSignupProps, 'register'> & {
  nickname: boolean;
  setNickname: Dispatch<SetStateAction<boolean>>;
};

const NicknameValidation = ({
  getValues,
  dirtyFields,
  nickname,
  setNickname,
  errors
}: TNicknameValidationProps) => {
  const errorMessages = {
    409: TOAST_MESSAGE.NICKNAME_ALREADY_TAKEN,
    [TOAST_MESSAGE.LENGTH_NICKNAME_MESSAGE]:
      TOAST_MESSAGE.LENGTH_NICKNAME_MESSAGE,
    [TOAST_MESSAGE.NICKNAME_SPACE_ERROR]: TOAST_MESSAGE.NICKNAME_SPACE_ERROR,
    default: TOAST_MESSAGE.GENERIC_ERROR
  };

  const handleNicknameValidation = async () => {
    try {
      const nicknameValue = getValues('nickname');
      const response = await userApi.nicknameValidation(nicknameValue);

      if (response.status === 200) {
        dirtyFields.nickname = false;
        setNickname(true);
        errors.nickname = undefined;
        showToast({
          type: 'success',
          message: TOAST_MESSAGE.NICKNAME_CHECKED_MESSAGE
        });
      } else if (response instanceof AxiosError<AxiosResponse>) {
        const errorMessage =
          errorMessages[response.response?.data] || response.response?.data;
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (error instanceof Error) {
        showToast({
          type: 'error',
          message: error.message
        });
      }
    }
  };

  return (
    <NicknameValidationContainer
      onClick={handleNicknameValidation}
      nickname={nickname}
    >
      닉네임 중복체크
    </NicknameValidationContainer>
  );
};

export default NicknameValidation;

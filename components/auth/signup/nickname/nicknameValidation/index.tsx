import React, { Dispatch, SetStateAction } from 'react';
import { NicknameValidationContainer } from './style';
import { userApi } from '../../../../../services/api';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE } from '../../../../../constants/contstant';
import { ApiError } from 'next/dist/server/api-utils';
import { TSignupProps } from '../..';

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
        toast.success(TOAST_MESSAGE.NICKNAME_CHECKED_MESSAGE);
      } else {
        // FIXME: response.reponse.data로 해야하나?
        const errorMessage =
          errorMessages[response.data] || errorMessages.default;
        throw new Error(errorMessage);
      }
    } catch (err) {
      if (err instanceof ApiError) {
        toast.error(err.message);
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

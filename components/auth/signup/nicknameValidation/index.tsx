import React, { Dispatch, SetStateAction } from 'react';
import { NicknameValidationContainer } from './style';
import { FieldValues, UseFormGetValues } from 'react-hook-form';
import { userApi } from '../../../../services/api';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE } from '../../../../constants/contstant';
import { ApiError } from 'next/dist/server/api-utils';

type FormErrors = {
  nickname?: string | null;
};

type TUseFormProps = {
  dirtyFields: Record<string, boolean>;
  errors: FormErrors;
};

type TProps = {
  getValues: UseFormGetValues<FieldValues>;
  nicknameState: boolean;
  setNicknameState: Dispatch<SetStateAction<boolean>>;
} & TUseFormProps;

const NicknameValidation = ({
  getValues,
  dirtyFields,
  nicknameState,
  setNicknameState,
  errors
}: TProps) => {
  const errorMessages = {
    409: TOAST_MESSAGE.NICKNAME_ALREADY_TAKEN,
    [TOAST_MESSAGE.LENGTH_NICKNAME_MESSAGE]:
      TOAST_MESSAGE.LENGTH_NICKNAME_MESSAGE,
    [TOAST_MESSAGE.NICKNAME_SPACE_ERROR]: TOAST_MESSAGE.NICKNAME_SPACE_ERROR,
    default: TOAST_MESSAGE.GENERIC_ERROR
  };

  const handleNicknameValidation = async () => {
    try {
      const nickname = getValues('nickname');
      const response = await userApi.nicknameValidation(nickname);

      if (response.status === 200) {
        dirtyFields.nickname = false;
        setNicknameState(true);
        errors.nickname = null;
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
      className="login__wrapper-verification login__wrapper-nickname__verification"
      onClick={handleNicknameValidation}
      nicknameState={nicknameState}
    >
      닉네임 중복체크
    </NicknameValidationContainer>
  );
};

export default NicknameValidation;

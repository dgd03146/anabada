import React from 'react';

const NicknameValidation = () => {
  return (
    <div
      className="login__wrapper-verification login__wrapper-nickname__verification"
      onClick={handleNicknameValidation}
    >
      닉네임 중복체크
    </div>
  );
};

export default NicknameValidation;

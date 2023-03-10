export const emailValidationRules = {
  required: true,
  pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
};

export const passwordValidationRules = {
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
};

// export const passwordValidationRules = {};

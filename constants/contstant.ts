export const PICKER = {
  beachId: -1,
  beachName: '',
  beachNum: '',
  pcp: '',
  pop: '',
  pty: '',
  sky: '',
  tmp: '',
  wav: '',
  wsd: '',
  x: 36.350701,
  y: 127.600667
};

export const BREAK_POINTS = {
  default: 3,
  1600: 2,
  1280: 2,
  900: 3,
  700: 2
};

export const AMENITY_CHECK = {
  airgun: false,
  shower: false,
  shop: false,
  cafe: false,
  park: false,
  sleep: false
};

export const SIGNUP_MESSAGE = {
  SUCCESS_SIGNUP: '회원가입에 성공했습니다'
};

export const LOGIN_MESSAGE = {
  SUCCESS_LOGIN: '로그인에 성공하였습니다.',
  CHECK_EMAIL_PASSWORD: '이메일과 비밀번호를 확인해주세요',
  FAIL_LOGIN: '로그인에 실패하였습니다. 다시 시도해주세요',
  SUCCESS_LOGOUT: '로그아웃이 되었습니다',
  FAIL_LOGOUT: '로그아웃에 실패하였습니다'
};

export const EMAIL_MESSAGE = {
  EMAIL_ALREADY_TAKEN: '존재하는 이메일 입니다!',
  EMAIL_CHECKED_MESSAGE: '이메일이 확인되었습니다. 계속 진행해주세요!',
  INPUT_EMAIL: '이메일을 입력해주세요',
  INVALID_EMAIL_FORMAT: '형식에 맞게 메일 주소를 입력하세요',
  EMAIL_CHECK_MESSAGE: '이메일 중복확인을 해주세요'
};

export const BEACH_MESSAGE = {
  BEACH_CHECK_MESSAGE: '서핑 스팟을 입력해주세요!',
  BEACH_ERROR_MESSAGE: '서핑 스팟을 찾을 수 없습니다'
};

export const PASSWORD_MESSAGE = {
  INPUT_PASSWORD: '비밀번호를 입력해주세요',
  INVALID_PASSWORD_FORMAT: '형식에 맞게 비밀번호를 입력하세요',
  PASSWORD_PATTERN_MESSAGE:
    '영어, 대문자, 소문자, 숫자, 특수문자를 포함해주세요'
};

// 분기하기
export const TOAST_MESSAGE = {
  GENERIC_ERROR: '서버와 통신에 실패했습니다. 다시 시도해주세요',

  NICKNAME_CHECK_MESSAGE: '닉네임 중복확인을 해주세요',
  NICKNAME_ALREADY_TAKEN: '존재하는 닉네임 입니다!',
  NICKNAME_CHECKED_MESSAGE: '닉네임이 확인되었습니다. 계속 진행해주세요!',
  NICKNAME_SPACE_ERROR: '닉네임에 빈 칸을 사용할 수 없습니다',
  LENGTH_NICKNAME_MESSAGE: '닉네임은 8자 이하로 설정해 주세요',

  INVALID_FORM_MESSAGE: '유효하지 않은 형식입니다. 다시 확인해주세요.'
};

export const MY_PAGES = {
  myWritePost: {
    label: '작성 피드',
    iconSrc: '/assets/icons/write.svg',
    iconAlt: 'My Write',
    iconWidth: 24,
    iconHeight: 24
  },
  myLikePost: {
    label: '좋아요 피드',
    iconSrc: '/assets/icons/like.svg',
    iconAlt: 'My Like',
    iconWidth: 25,
    iconHeight: 24
  },
  myHostMeet: {
    label: '주최 모임',
    iconSrc: '',
    iconAlt: '',
    iconWidth: 0,
    iconHeight: 0
  },
  myJoinMeet: {
    label: '참석 모임',
    iconSrc: '/assets/icons/join.svg',
    iconAlt: 'Join',
    iconWidth: 24,
    iconHeight: 24
  },
  myLikeMeet: {
    label: '좋아요 모임',
    iconSrc: '/assets/icons/likeMeets.svg',
    iconAlt: 'Join',
    iconWidth: 24,
    iconHeight: 24
  }
};

export const BlurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

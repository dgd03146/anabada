import { PICKER } from '../../constants/contstant';

// TODO: Type 분기하기

export type TUser = {
  userId?: string;
  email?: string;
  nickname?: string;
  password?: string;
  profileImg?: string;
};

export type TLogin = Pick<TUser, 'email' | 'password'>;

export type TSignup = Omit<TUser, 'userId'>;

// Event
export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TKeyEvent = React.KeyboardEvent<HTMLInputElement>;
export type TEvent = TInputChangeEvent | TKeyEvent;
export type TSelectEvent = React.ChangeEvent<HTMLSelectElement>;

// Spot
export type TSpot = typeof PICKER;

// Post
export type TPostImg = {
  file: File;
  name: string;
};

export type TPost = {
  postId?: string;
  title?: string;
  area?: string;
  address?: string;
  content?: string;
  thumbnailUrl: string;
  nickname?: string;
  profileImg?: string;
  likeCount?: number;
  isLiked?: boolean;
  postImg?: TPostImg[];
  after?: string;
  createdAt?: string;
  amenity?: string;
  viewCount?: number;
  totalComment?: number;
};

export type TPosts = TPost[];

// Comment
export type TComment = {
  commentId?: string;
  email?: string;
  nickname?: string;
  profileImg?: string;
  content?: string;
  after?: string;
  createdAt?: string;
  postId?: string;
};

export type TComments = TComment[];

// inifinite
export type TResponse<T> = {
  data: T;
  nextPage: number;
  last: boolean;
};

// notification
export type TNotifications = {
  isBadge: boolean;
};

export type TPathnameProps = {
  pathname: string;
};

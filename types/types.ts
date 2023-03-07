import { Picker } from '../constants/contstant';

export type TUser = {
  userId?: string;
  email?: string;
  nickname?: string;
  password?: string;
  profileImg?: string;
};

// Event
export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TKeyEvent = React.KeyboardEvent<HTMLInputElement>;
export type TEvent = TInputChangeEvent | TKeyEvent;
export type TSelectEvent = React.ChangeEvent<HTMLSelectElement>;

// Spot
export type TSpot = typeof Picker;

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

export type TResponse<T> = {
  data: T;
  nextPage: number;
  last: boolean;
};

export type TOutletContext = {
  alertHandler: (errorMessage?: string) => void;
};

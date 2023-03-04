import { Picker } from '../constants/contstant';

export type TSpot = typeof Picker;

export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TKeyEvent = React.KeyboardEvent<HTMLInputElement>;
export type TEvent = TInputChangeEvent | TKeyEvent;
export type TSelectEvent = React.ChangeEvent<HTMLSelectElement>;

export type TPostImg = {
  file: File;
  name: string;
};

export type TPost = {
  postId?: string;
  title: string;
  area: string;
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
  amenity: string;
};

export type TPosts = TPost[];

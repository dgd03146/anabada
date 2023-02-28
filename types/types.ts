import { Picker } from '../constants/contstant';

export type TPicker = typeof Picker;

export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TKeyEvent = React.KeyboardEvent<HTMLInputElement>;
export type TEvent = TInputChangeEvent | TKeyEvent;
export type TSelectEvent = React.ChangeEvent<HTMLSelectElement>;

export type TPost = {
  postId: number;
  title: string;
  area: string;
  thumbnailUrl: string;
  nickname: string;
  profileImg: string;
  likeCount: number;
  isLiked: boolean;

  after: string;
  createdAt: string;
  amenity: string;
};

export type TPosts = TPost[];

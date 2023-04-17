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

export type TSignup = Omit<TUser, 'userId'> & { confirmPassword?: string };

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

type NamedBlob = Blob & { readonly name: string };
type NamedUint8Array = Uint8Array & { readonly name: string };
type NamedArrayBuffer = ArrayBuffer & { readonly name: string };

export type ThumbnailFile = NamedBlob | NamedUint8Array | NamedArrayBuffer;

export type TMeet = {
  thunderPostId: string;
  title: string;
  content: string;
  nickname: string;
  profileImg: string;
  area: string;
  address: string;
  goalMember: number;
  currentMember: number;
  thumbnailUrl: string;
  likeCount: number;
  viewCount: number;
  isLiked: boolean;
  isJoined: boolean;
  meetDate: string;
  startDate: string;
  endDate: string;
  after: string;
  createdAt: string;
  members: TMember[];
  liked: boolean;
  joined: boolean;
};

export type TMember = {
  email: string;
  profileImg: string;
  nickname: string;
};

export type TMeets = {
  content: TMeet[];
};

export type TMyMeets = Pick<
  TMeet,
  | 'title'
  | 'nickname'
  | 'goalMember'
  | 'currentMember'
  | 'thumbnailUrl'
  | 'startDate'
  | 'endDate'
  | 'createdAt'
> &
  { thunderpostId: string }[];

export type TAllMeets = TMeet[];

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

export type TMyPosts = Pick<
  TPost,
  'postId' | 'title' | 'nickname' | 'thumbnailUrl'
>[];

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

export type TNotification = {
  notificationId: string;
  type: 'like' | 'comment';
  user: TUser;
  post: TPost;
  isRead: boolean;
  createdAt: string;
  isBadge: boolean;
};

export type TCheckNotifications = {
  isBadge: boolean;
};

// notification
export type TNotifications = {
  content: TNotification[];
};

export type TPathnameProps = {
  pathname: string;
};

export type TMessage = {
  nickname: String;
  content: string;
  createdAt: string;
};

export type TMessages = TMessage[];

export type TRoom = {
  roomId: string;
  senderNickname: String;
  senderProfileImg: String;
  receiverNickname: String;
  receiverProfileImg: String;
  lastMsg: String;
};

export type TRooms = TRoom[];

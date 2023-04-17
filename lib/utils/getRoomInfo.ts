import { TRoom } from '../types/types';

export const getRoomInfo = (
  room: TRoom,
  nickname?: string,
  profileImg?: string
) => {
  const roomName =
    nickname === room.receiverNickname
      ? room.senderNickname
      : room.receiverNickname;
  const roomProfileImg =
    profileImg === room.receiverProfileImg
      ? room.senderProfileImg
      : room.receiverProfileImg;
  return { roomName, roomProfileImg };
};

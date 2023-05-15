import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiMoreHorizontal, FiEdit2 } from 'react-icons/fi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import React from 'react';
import { SelectContainer } from './style';
import { useDeleteMeet } from '../../../../quries/hooks/meets/useDeleteMeet';
import { TMeet } from '../../../../lib/types/types';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../../../quries/key';
import useGetToken from '../../../../lib/hooks/user/useGetToken';
import { BlurDataURL } from '../../../../constants/contstant';

type TMeetTopInfoProps = {
  meet?: TMeet;

  isCurrentUser: boolean;
  nickname?: string;
};

const MeetTopInfo = ({
  meet,

  isCurrentUser,
  nickname
}: TMeetTopInfoProps) => {
  const router = useRouter();
  const accessToken = useGetToken();

  const { onDelete } = useDeleteMeet();
  const [showModal, setShowModal] = useState(false);

  const onRequestChat = (nickname: string) => {
    router.push(`/chat/${nickname}`);
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="postTopInfo">
      <p className="title">{meet?.title}</p>
      <div className="postUserInfoContainer">
        <div className="postUserInfo">
          {meet?.profileImg && (
            <Image
              src={meet.profileImg}
              alt="profileUrl"
              width={50}
              height={50}
              placeholder="blur"
              blurDataURL={BlurDataURL}
            />
          )}
          <p className="nickname">{meet?.nickname}</p>
          <p>{meet?.createdAt}</p>
          <p>{meet?.after}</p>
          <p>조회 {meet?.viewCount}</p>
        </div>
        {accessToken && isCurrentUser && (
          <button className="more-btn" onClick={onShowModal}>
            <FiMoreHorizontal />
          </button>
        )}
        {accessToken && nickname && !isCurrentUser && (
          <button className="chat-btn" onClick={() => onRequestChat(nickname)}>
            <BsFillChatDotsFill />
          </button>
        )}
        {showModal && (
          <SelectContainer>
            <button
              className="editBtn"
              onClick={() => {
                // FIXME: edit 페이지
                router.push(`/meets/edit/${meet?.thunderPostId}`);
              }}
            >
              수정하기
              <FiEdit2 />
            </button>

            <button
              className="deleteBtn"
              onClick={() => {
                const result = window.confirm('정말 삭제하시겠습니까?');
                if (result) {
                  onDelete(meet?.thunderPostId!);
                }
              }}
            >
              삭제하기
              <RiDeleteBin5Line />
            </button>
          </SelectContainer>
        )}
      </div>
    </div>
  );
};

export default MeetTopInfo;

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

type TMeetTopInfoProps = {
  meet?: TMeet;
  accessToken: string | null;
  isCurrentUser: boolean;
  nickname?: string;
};

const MeetTopInfo = ({
  meet,
  accessToken,
  isCurrentUser,
  nickname
}: TMeetTopInfoProps) => {
  const router = useRouter();

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
            />
          )}
          <p className="nickname">{meet?.nickname}</p>
          <Image
            src="/aseets/icons/clock.svg"
            alt="created at"
            width={2}
            height={10}
          />
          <p>{meet?.createdAt}</p>
          <Image
            src="/aseets/icons/clock.svg"
            alt="after"
            width={2}
            height={10}
          />
          <p>{meet?.after}</p>
          <Image
            src="/aseets/icons/eye.svg"
            alt="view count"
            width={2}
            height={10}
          />
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
            {/* FIXME: BUTTON으로 바꿔야하지 않나? */}
            <div
              className="editBtn"
              onClick={() => {
                // FIXME: edit 페이지
                router.push(`/meet/edit/${meet?.thunderPostId}`);
              }}
            >
              수정하기
              <FiEdit2 />
            </div>
            {/* FIXME: BUTTON으로 바꿔야하지 않나? */}
            <div
              className="deleteBtn"
              onClick={() => {
                const result = window.confirm('정말 삭제하시겠습니까?');
                if (result) {
                  // FIXME: ! 안 사용하고 싶은디
                  onDelete(meet?.thunderPostId!);
                }
              }}
            >
              삭제하기
              <RiDeleteBin5Line />
            </div>
          </SelectContainer>
        )}
      </div>
    </div>
  );
};

export default MeetTopInfo;

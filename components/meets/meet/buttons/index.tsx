import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { TMeet } from '../../../../lib/types/types';
import { useJoin } from '../../../../quries/hooks/meets/useJoin';
import { useLike } from '../../../../quries/hooks/meets/useLike';
import { ButtonContainer } from './style';

type TMeetButtonProps = {
  meet?: TMeet;
  isLiked: boolean;
  isJoined: boolean;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  setIsJoined: Dispatch<SetStateAction<boolean>>;
};

const MeetButtons = ({
  meet,
  isLiked,
  isJoined,
  setIsLiked,
  setIsJoined
}: TMeetButtonProps) => {
  const { onToggleLike } = useLike();
  const { onToggleJoin } = useJoin();
  return (
    <ButtonContainer>
      <button
        className="likeBtn"
        onClick={() => {
          const state = {
            setIsLiked,
            isLiked,
            thunderPostId: meet?.thunderPostId
          };
          onToggleLike(state);
        }}
      >
        <Image
          src={
            isLiked
              ? '/assets/icons/heart-filled.svg'
              : '/assets/icons/heart-unfilled.svg'
          }
          alt="Like svg"
          width={19}
          height={18}
        />
        좋아요
      </button>

      {meet?.goalMember! - meet?.currentMember! === 0 ? (
        <button
          className="requestedBtn"
          style={{ backgroundColor: '#007AFF', color: 'white' }}
          onClick={() => {
            const state = {
              setIsJoined,
              isJoined,
              thunderPostId: meet?.thunderPostId
            };
            onToggleJoin(state);
          }}
        >
          {isJoined ? '마감 (참가 취소)' : '마감'}
        </button>
      ) : (
        <button
          className={isJoined ? 'requestedBtn' : 'requestBtn'}
          style={{ backgroundColor: '#007AFF', color: 'white' }}
          onClick={() => {
            const state = {
              setIsJoined,
              isJoined,
              thunderPostId: meet?.thunderPostId
            };
            onToggleJoin(state);
          }}
        >
          {isJoined ? '참가 취소' : '참가하기'}
        </button>
      )}
    </ButtonContainer>
  );
};

export default MeetButtons;

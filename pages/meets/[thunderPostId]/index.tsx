import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDeleteMeet } from '../../../quries/hooks/meets/useDeleteMeet';
import { useLike } from '../../../quries/hooks/meets/useLike';
import { useJoin } from '../../../quries/hooks/meets/useJoin';
import Navigate from '../../../components/layout/navigate';
import { useMeet } from '../../../quries/hooks/meets/useMeet';
import { useRouter } from 'next/router';
import useUser from '../../../quries/hooks/user/useUser';
import { Members } from '../../../components/meets/meet/members';
import MeetButtons from '../../../components/meets/meet/buttons';
import {
  AddressContainer,
  Container,
  ImageWrapper,
  PostDescription
} from './style';
import MeetInfo from '../../../components/meets/meet/info';
import MeetTopInfo from '../../../components/meets/meet/topInfo';
import MeetAdd from '../add';
import NoData from '../../../components/layout/noData';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../../quries/key';

const Meet = () => {
  // TODO: NEXT.JS PRERENDERING 필요
  const router = useRouter();
  const { user } = useUser();

  const nickname = user?.nickname;
  const thunderPostId = router.query.thunderPostId as string;

  const { meet, isLiked, setIsLiked, isJoined, setIsJoined } =
    useMeet(thunderPostId);
  const isCurrentUser = nickname === meet?.nickname;

  useEffect(() => {
    // FIXME: useEffect에서 해줘야하나? Otpmistic UI 적용 고려
    if (meet) {
      setIsLiked(meet.liked);
      setIsJoined(meet.joined);
    }
  }, []);

  if (!meet) {
    return <NoData text="모임" meet={true} />;
  }
  return (
    <Container>
      <Navigate text={'모임'} />
      <MeetTopInfo
        meet={meet}
        isCurrentUser={isCurrentUser}
        nickname={nickname}
      />
      <ImageWrapper>
        <Image src={meet.thumbnailUrl} alt="thumbnail" fill />
      </ImageWrapper>
      <AddressContainer>
        <Image
          src={'/assets/icons/address.svg'}
          width={16}
          height={16}
          alt="Address svg"
        />
        <p className="area">{meet.area}</p>
        <p>{meet.address}</p>
      </AddressContainer>
      <MeetInfo meet={meet} />
      <PostDescription>{meet.content}</PostDescription>
      {!isCurrentUser && (
        <MeetButtons
          meet={meet}
          isLiked={isLiked}
          isJoined={isJoined}
          setIsLiked={setIsLiked}
          setIsJoined={setIsJoined}
        />
      )}
      {!isCurrentUser && meet.members.length && <Members meet={meet} />}
    </Container>
  );
};

export default Meet;

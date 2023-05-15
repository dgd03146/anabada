import React, { useEffect } from 'react';
import Image from 'next/image';
import Navigate from '../../../layout/navigate';
import { useMeet } from '../../../../quries/hooks/meets/useMeet';
import useUser from '../../../../quries/hooks/user/useUser';
import { useRouter } from 'next/router';
import { Members } from '../members';
import MeetButtons from '../buttons';

import {
  AddressContainer,
  Container,
  ImageWrapper,
  PostDescription
} from './style';

import MeetInfo from '../info';

import { BlurDataURL } from '../../../../constants/contstant';
import LoadingSpinner from '../../../loading';
import MeetTopInfo from '../topInfo';

const MeetDetail = () => {
  const router = useRouter();
  const { user } = useUser();

  const nickname = user?.nickname;
  const thunderPostId = router.query.thunderPostId as string;

  const { meet, isLiked, setIsLiked, isJoined, setIsJoined } =
    useMeet(thunderPostId);
  const isCurrentUser = nickname === meet?.nickname;

  useEffect(() => {
    if (meet) {
      setIsLiked(meet.liked);
      setIsJoined(meet.joined);
    }
  }, []);

  if (!meet) {
    return <LoadingSpinner />;
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
        <Image
          src={meet.thumbnailUrl}
          alt="thumbnail"
          fill
          placeholder="blur"
          blurDataURL={BlurDataURL}
        />
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

export default MeetDetail;

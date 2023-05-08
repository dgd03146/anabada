import React, { useEffect } from 'react';
import Image from 'next/image';
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
import Loading from '../../../components/loading';

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
    return <Loading />;
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

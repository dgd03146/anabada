import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../../components/layout/navigate';
import { useRooms } from '../../../quries/hooks/chat/rooms/useRooms';
import { useInView } from 'react-intersection-observer';
import Loading from '../../../components/loading';
import NoData from '../../../components/layout/noData';
import WithoutLayout from '../../../components/hoc/withoutLayout';
import useUser from '../../../quries/hooks/user/useUser';
import { useRouter } from 'next/router';
import { getRoomInfo } from '../../../lib/utils/getRoomInfo';
import Image from 'next/image';
import { Container, LeftBox } from './style';

const ChatRoom = () => {
  const { user } = useUser();
  const nickname = user?.nickname;
  const profileImg = user?.profileImg;

  const { rooms, isFetchingNextPage, fetchNextPage } = useRooms();
  const { ref, inView } = useInView();

  const router = useRouter();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Navigate text={'채팅'} padding={true} />
      {rooms?.pages[0].data.length === 0 && (
        <NoData text={'받은 메세지'} chat={true} />
      )}
      {rooms?.pages?.flatMap(({ data }) => {
        return data.map((room) => {
          const { roomName, roomProfileImg } = getRoomInfo(
            room,
            nickname,
            profileImg
          );
          return (
            <React.Fragment key={room.roomId}>
              <div
                className="chatContainer"
                onClick={() => router.push(`/chat/${roomName}`)}
              >
                <LeftBox>
                  <Image
                    src={roomProfileImg}
                    alt="RoomProifleImg"
                    width={36}
                    height={36}
                  />
                  <div className="leftBox">
                    <p className="nickname">{roomName}</p>
                    <p className="lastMessage">{room.lastMsg}</p>
                  </div>
                </LeftBox>
              </div>
            </React.Fragment>
          );
        });
      })}
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </Container>
  );
};

export default WithoutLayout(ChatRoom);

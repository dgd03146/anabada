import React, { useEffect } from 'react';
import { useState } from 'react';
import { PICKER } from '../constants/contstant';
import MapSearch from '../components/map/search';
import KakaoMap from '../components/map';
import { useStompNotifications } from '../lib/hooks/socket/useStompNotifications';
import useUser from '../quries/hooks/user/useUser';
import { notificationsApi } from '../services/api';
import { Cookies } from 'react-cookie';
import { QueryClient } from '@tanstack/react-query';
import { useSpots } from '../quries/hooks/spots/useSpots';
import Loading from '../components/loading';
import { QueryKeys } from '../quries/key';

const Home = () => {
  const queryClient = new QueryClient();

  const [picker, setPicker] = useState(PICKER);
  const spots = useSpots();

  // FIXME: accesstoken과 refreshtoken 둘다 클래스로 해서 다른곳에서 사용가능하게
  const cookies = new Cookies();
  const refreshToken = cookies.get('refreshToken');
  const accessToken = queryClient.getQueryData<string>([QueryKeys.accessToken]);

  useEffect(() => {
    // 로그인 한 유저가 아니면 유저정보를 요청하지 않음
    if (refreshToken === undefined || accessToken === undefined) {
      return;
    } else {
      // 로그인 한 유저가 유저이면 새로고침 시 유저정보를 요청함
      useUser();
    }
  }, []);

  // FIXME: enabled 옵션 줘야할 듯?
  const { user } = useUser();

  const { setNotificationsBadge } = useStompNotifications(user?.userId || '');

  // FIXME: 제대로 동작할지? notification에서 해야하지 않나
  useEffect(() => {
    // 로그인을 했을 때 최초 쌓인 뱃지 요청하기(이후는 소캣 이용해서 업데이트 된다)
    if (refreshToken !== undefined && accessToken) {
      notificationsApi
        .checkNotifications({
          // accesstoken 넣어줄 필요 없지 않나?
          Authorization: accessToken
        })
        .then((res) => {
          return setNotificationsBadge((prev) => {
            return {
              ...prev,
              isBadge: res.data?.badge
            };
          });
        });
    }
  }, [refreshToken]);

  // FIXME: suspense 적용해보자
  if (!spots) {
    return <Loading />;
  }

  return (
    <>
      <MapSearch setPicker={setPicker} spots={spots} />
      <KakaoMap picker={picker} setPicker={setPicker} spots={spots} />
    </>
  );
};

export default Home;

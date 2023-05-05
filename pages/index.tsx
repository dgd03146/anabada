import React, { useEffect } from 'react';
import { useState } from 'react';
import { PICKER } from '../constants/contstant';
import MapSearch from '../components/map/search';
import KakaoMap from '../components/map';
import { useStompNotifications } from '../lib/hooks/socket/useStompNotifications';
import useUser from '../quries/hooks/user/useUser';
import { notificationsApi } from '../services/api';
import { useSpots } from '../quries/hooks/spots/useSpots';
import Loading from '../components/loading';
import { getRefreshToken } from '../services/token';
import useGetToken from '../lib/hooks/token/useGetToken';

const Home = () => {
  const [picker, setPicker] = useState(PICKER);

  const refreshToken = getRefreshToken();
  const accessToken = useGetToken();

  useEffect(() => {
    // 로그인 한 유저가 아니면 유저정보를 요청하지 않음
    if (refreshToken === undefined || accessToken === undefined) {
      return;
    } else {
      // 로그인 한 유저가 유저이면 새로고침 시 유저정보를 요청함
      useUser();
    }
  }, []);

  const { user } = useUser();

  const { setNotificationsBadge } = useStompNotifications(user?.userId || '');

  // FIXME: 제대로 동작할지? notification에서 해야하지 않나
  useEffect(() => {
    // 로그인을 했을 때 최초 쌓인 뱃지 요청하기(이후는 소캣 이용해서 업데이트 된다)
    if (refreshToken !== undefined && accessToken) {
      notificationsApi
        .checkNotifications({
          // accesstoken 넣어줄 필요 없지 않나?
          Authorization: accessToken as unknown as string
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

  return (
    <>
      <MapSearch setPicker={setPicker} />
      <KakaoMap picker={picker} setPicker={setPicker} />
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useState } from 'react';
import { PICKER } from '../constants/contstant';
import MapSearch from '../components/map/search';
import KakaoMap from '../components/map';
import { useNotificationStomp } from '../lib/hooks/socket/useNotificationStomp';
import useUser from '../quries/hooks/user/useUser';
import { notificationsApi } from '../services/api';
import { Cookies } from 'react-cookie';

const Home = () => {
  const [picker, setPicker] = useState(PICKER);

  const cookies = new Cookies();
  const refreshToken = cookies.get('refreshToken');
  const accessToken = localStorage.getItem('accessToken');

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
  const { setNotificationsBadge } = useNotificationStomp(user?.userId!);

  // FIXME: 제대로 동작할지? notification에서 해야하지 않나
  useEffect(() => {
    // 로그인을 했을 때 최초 쌓인 뱃지 요청하기(이후는 소캣 이용해서 업데이트 된다)
    if (refreshToken !== undefined && accessToken) {
      notificationsApi
        .checkNotifications({
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

  return (
    <>
      <MapSearch setPicker={setPicker} />
      <KakaoMap picker={picker} setPicker={setPicker} />
    </>
  );
};

export default Home;

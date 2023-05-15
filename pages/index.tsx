import React, { useEffect } from 'react';
import { useState } from 'react';
import { PICKER } from '../constants/contstant';
import MapSearch from '../components/map/search';
import KakaoMap from '../components/map';
import { useNotifications } from '../lib/hooks/socket/useNotifications';
import useUser from '../quries/hooks/user/useUser';
import { notificationsApi } from '../services/api';
import { getSpots, useSpots } from '../quries/hooks/spots/useSpots';
import Loading from '../components/loading';
import { getRefreshToken } from '../services/token';
import useGetToken from '../lib/hooks/user/useGetToken';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { QueryKeys } from '../quries/key';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QueryKeys.spots], getSpots);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}

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

  return (
    <>
      <MapSearch setPicker={setPicker} />
      <KakaoMap picker={picker} setPicker={setPicker} />
    </>
  );
};

export default Home;

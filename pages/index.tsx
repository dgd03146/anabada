import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { Picker } from '../constants/contstant';
import MapSearch from '../components/map/mapSearch';
import KakaoMap from '../components/map/map';
// import { usePreFetchPosts } from '../../react-query/hooks/posts/usePosts';

const Home = () => {
  // usePreFetchPosts();

  const [picker, setPicker] = useState({ Picker });

  // TODO: react hook으로 분리
  // fetcher
  const fetchingSpot = () =>
    axios.get(`https://${process.env.REACT_APP_API_SERVER}/api/beach`);
  // react-query
  const { data: spots } = useQuery(['spotData'], fetchingSpot, {
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    onError(err) {
      console.log('에러가 발생했습니다!! ::: ', err);
    }
  });

  return (
    <>
      <MapSearch setPicker={setPicker} spots={spots} />
      <KakaoMap spots={spots} picker={picker} setPicker={setPicker} />
    </>
  );
};

export default Home;

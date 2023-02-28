import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Picker } from '../constants/contstant';
import MapSearch from '../components/map/search';
import KakaoMap from '../components/map';
import { TPicker } from '../types/types';
import { useSpots } from '../quries/hooks/spots/useSpots';
import { usePreFetchPosts } from '../quries/hooks/posts/usePosts';

const Home = () => {
  usePreFetchPosts();
  const [picker, setPicker] = useState(Picker);
  // TODO: react hook으로 분리
  const spots = useSpots();

  return (
    <>
      <MapSearch setPicker={setPicker} />
      <KakaoMap picker={picker} setPicker={setPicker} />
    </>
  );
};

export default Home;

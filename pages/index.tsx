import React from 'react';
import { useState } from 'react';
import { Picker } from '../constants/contstant';
import MapSearch from '../components/map/search';
import KakaoMap from '../components/map';

const Home = () => {
  const [picker, setPicker] = useState(Picker);

  return (
    <>
      <MapSearch setPicker={setPicker} />
      <KakaoMap picker={picker} setPicker={setPicker} />
    </>
  );
};

export default Home;

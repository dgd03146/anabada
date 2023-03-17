import React from 'react';

import Image from 'next/image';
import Meet from '../../components/meets';
import PopularMeets from '../../components/meets/popularMeets';
import NoData from '../../components/layout/noData/chat-notification';
import { TbPencil } from 'react-icons/tb';
import { usePopularMeets } from '../../quries/hooks/meets/usePopularMeets';
import AreaSelector from '../../components/common/areaSelector';
import { TMeet, TSelectEvent } from '../../lib/types/types';
import { useRouter } from 'next/router';
import { useMeets } from '../../quries/hooks/meets/useMeets';
import Link from 'next/link';
import { MeetsContainer, MeetsPostsContainer, PostBtn } from './style';

const Meets = () => {
  const router = useRouter();
  const accesstoken = localStorage.getItem('accessToken');
  const { meets, areaSelected, setAreaSelected } = useMeets();
  const { popularMeets, setPopularAreaSelected } = usePopularMeets();

  const onChangeArea = (e: TSelectEvent) => {
    setAreaSelected(e.target.value);
    setPopularAreaSelected(e.target.value);
  };

  return (
    <MeetsContainer>
      <AreaSelector areaSelected={areaSelected} onChangeArea={onChangeArea} />
      <div className="scrollTest">
        <PopularMeets popularMeets={popularMeets} />
      </div>
      <MeetsPostsContainer>
        <div className="topBox">
          <h2>오픈 모임 리스트</h2>
          <button onClick={() => router.push('/meets/all')}>
            <Image
              src="/assets/rightArrow.svg"
              alt="Right Arrow"
              width={9}
              height={14}
            />
          </button>
        </div>
        {meets?.content.length === 0 && (
          <NoData text={'모임'} content={'모임'} />
        )}
        {meets?.content.map((meet: TMeet) => {
          return <Meet key={meet.thunderPostId} meet={meet} />;
        })}
      </MeetsPostsContainer>
      {accesstoken && (
        <PostBtn>
          <Link href="/meets/add">
            <TbPencil />
          </Link>
        </PostBtn>
      )}
    </MeetsContainer>
  );
};

export default Meets;

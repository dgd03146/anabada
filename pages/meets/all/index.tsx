import React, { useEffect } from 'react';
import styled from 'styled-components';
import Meet from '../../../components/meets';
import { useInView } from 'react-intersection-observer';
import Loading from '../../../components/loading';
import { TbPencil } from 'react-icons/tb';
import Link from 'next/link';
import NoData from '../../../components/nodata';
import { useAllMeets } from '../../../quries/hooks/meets/useAllMeets';
import AreaSelector from '../../../components/common/areaSelector';
import { TEvent, TKeyEvent, TSelectEvent } from '../../../lib/types/types';
import { MeetAddBtn, MeetAllContainer } from './style';

const MeetsAll = () => {
  const accesstoken = localStorage.getItem('accessToken');
  const { ref, inView } = useInView();

  const {
    allMeets,
    fetchNextPage,
    isFetchingNextPage,
    setSearch,
    setAreaSelected,
    areaSelected
  } = useAllMeets();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const onKeyPress = (e: TKeyEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onSearch = (e: TEvent) => {
    if ('value' in e.target) {
      setSearch(e.target.value);
    }
  };

  const onChangeArea = (e: TSelectEvent) => {
    setAreaSelected(e.target.value);
  };

  return (
    <MeetAllContainer>
      <AreaSelector
        areaSelected={areaSelected}
        onChangeArea={onChangeArea}
        onKeyPress={onKeyPress}
      />
      {accesstoken && (
        <MeetAddBtn>
          <Link href="/meets/add">
            <TbPencil />
          </Link>
        </MeetAddBtn>
      )}

      {allMeets?.pages[0].data.length === 0 && (
        <NoData text={'모임'} content={'모임'} />
      )}
      {allMeets?.pages.map((page) => {
        return page.data.map((meet) => (
          <Meet key={meet.thunderPostId} meet={meet} />
        ));
      })}

      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </MeetAllContainer>
  );
};

export default MeetsAll;

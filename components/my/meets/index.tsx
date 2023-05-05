import { useInfiniteQuery } from '@tanstack/react-query';

import Meet from '../../meets';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import Loading from '../../loading';
import { NoDataMyPage } from '../../layout/noData/myPage';

import React from 'react';
import { BtnDiv, MeetAllContainer } from './style';
import { useRouter } from 'next/router';
import useMyMeets from '../../../quries/hooks/mypage/meets/useMyMeets';

const MyMeets = () => {
  const router = useRouter();
  const query = router.query;
  const state = query.state as string;

  const { ref, inView } = useInView();
  const [tab, setTab] = useState(state);

  const { myMeets, fetchNextPage, isFetchingNextPage, filter, setFilter } =
    useMyMeets(state);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const onClickFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <>
      <BtnDiv>
        <button
          className={`btn ${tab === 'myHostMeet' ? 'active' : ''} `}
          onClick={() => {
            onClickFilter('myHostMeet');
            setTab('myHostMeet');
          }}
        >
          <label>주최 모임</label>
        </button>
        <button
          className={`btn ${tab === 'myJoinMeet' ? 'active' : ''} `}
          onClick={() => {
            onClickFilter('myJoinMeet');
            setTab('myJoinMeet');
          }}
        >
          <label>참석 모임</label>
        </button>
        <button
          className={`btn ${tab === 'myLikeMeet' ? 'active' : ''} `}
          onClick={() => {
            onClickFilter('myLikeMeet');
            setTab('myLikeMeet');
          }}
        >
          <label>좋아요 모임</label>
        </button>
      </BtnDiv>

      <MeetAllContainer>
        {myMeets?.pages[0].data.length === 0 && (
          <NoDataMyPage text={filter} meet={true} />
        )}
        {myMeets &&
          myMeets?.pages.map((page) => {
            return page.data.map((meet) => (
              <Meet key={meet.thunderPostId} meet={meet} />
            ));
          })}
        {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
      </MeetAllContainer>
    </>
  );
};

export default MyMeets;

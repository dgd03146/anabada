import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '../../loading';
import Post from '../../posts/post';
import { NoDataMyPage } from '../../layout/noData/myPage';

import Masonry from 'react-masonry-css';
import { useRouter } from 'next/router';
import { BREAK_POINTS } from '../../../constants/contstant';
import useMyposts from '../../../quries/hooks/mypage/posts/useMyPosts';
import { BtnDiv, PostContainer, PostDiv } from './style';

const MyPosts = () => {
  const { ref, inView } = useInView();

  const router = useRouter();

  const query = router.query;
  const state = query.state as string;
  const { myPosts, fetchNextPage, isFetchingNextPage, filter, setFilter } =
    useMyposts(state);

  const [tab, setTab] = useState(state);

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
          className={`btn ${tab === 'myWritePost' ? 'active' : ''} `}
          onClick={() => {
            onClickFilter('myWritePost');
            setTab('myWritePost');
          }}
        >
          <label>작성 피드</label>
        </button>
        <button
          className={`btn ${tab === 'myLikePost' ? 'active' : ''} `}
          onClick={() => {
            onClickFilter('myLikePost');
            setTab('myLikePost');
          }}
        >
          <label>좋아요 피드</label>
        </button>
      </BtnDiv>
      <PostDiv>
        {myPosts?.pages[0].data.length === 0 && (
          <NoDataMyPage text={filter} post={true} />
        )}
        <Masonry
          breakpointCols={BREAK_POINTS}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {myPosts?.pages.map((page) => {
            return page.data.map((post) => (
              <PostContainer
                key={post.postId}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  router.push(`/posts/${post.postId}`);
                }}
              >
                <Post post={post} />
              </PostContainer>
            ));
          })}
        </Masonry>
        {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
      </PostDiv>
    </>
  );
};

export default MyPosts;

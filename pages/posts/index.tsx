import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { TbPencil } from 'react-icons/tb';
import { fetchPosts, usePosts } from '../../quries/hooks/posts/usePosts';
import { TEvent, TKeyEvent, TPost, TSelectEvent } from '../../lib/types/types';
import { BREAKPOINTS } from '../../constants/contstant';
import Loading from '../../components/loading';
import NoData from '../../components/nodata';
import Container from '../../components/posts/post/container';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../quries/key';
import { MainDiv, PostBtn, PostDiv } from './style';
import AreaSelector from '../../components/common/areaSelector';

// FIXME: prefetch 고려해보자
export async function getStaticProps() {
  const queryClient = new QueryClient();

  queryClient.prefetchInfiniteQuery([QueryKeys.posts], ({ pageParam = 0 }) =>
    fetchPosts(pageParam, 'ALL', '')
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}

const Posts = () => {
  const { ref, inView } = useInView();
  const {
    posts,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    areaSelected,
    setSearch,
    setAreaSelected
  } = usePosts();

  const accesstoken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
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
    <>
      <MainDiv>
        <AreaSelector
          areaSelected={areaSelected}
          onChangeArea={onChangeArea}
          onKeyPress={onKeyPress}
        />
        <PostDiv>
          {/* FIXME: loadash flatten 활용? */}
          {posts?.pages[0]?.data.length === 0 && (
            <NoData text={'게시물'} content={'게시물'} />
          )}
          <Masonry
            breakpointCols={BREAKPOINTS}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts?.pages.map((page) => {
              return page?.data.map((post: TPost) => (
                <Container
                  key={post.postId}
                  post={post}
                  isFetching={isFetching}
                  isLoading={isLoading}
                />
              ));
            })}
          </Masonry>
          {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
        </PostDiv>
      </MainDiv>
      {accesstoken && (
        <PostBtn>
          <Link to="/postAdd">
            <TbPencil />
          </Link>
        </PostBtn>
      )}
    </>
  );
};

export default Posts;

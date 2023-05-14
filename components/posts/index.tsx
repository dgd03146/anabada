import React, { useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { TbPencil } from 'react-icons/tb';
import { usePosts } from '../../quries/hooks/posts/usePosts';
import {
  TEvent,
  TKeyEvent,
  TPost,
  TPosts,
  TSelectEvent
} from '../../lib/types/types';
import { BREAK_POINTS } from '../../constants/contstant';
import { InfiniteLoadingSpinner } from '../../components/loading';
import NoData from '../../components/layout/noData';

import { MainDiv, PostBtn, PostDiv } from './style';
import AreaSelector from '../../components/common/areaSelector';

import Info from './post/info/postInfo';
import useGetToken from '../../lib/hooks/user/useGetToken';

// FIXME: 프리렌더링 적용
// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchInfiniteQuery([QueryKeys.posts, 'ALL', ''], () =>
//     getPosts(0, 'ALL', '')
//   );

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
//     }
//   };
// }

const Posts = () => {
  const { ref, inView } = useInView();

  const {
    posts,
    fetchNextPage,
    isFetchingNextPage,
    areaSelected,
    setSearch,
    setAreaSelected
  } = usePosts();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const accessToken = useGetToken();
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
          {posts?.pages[0]?.data.length <= 0 && (
            <NoData text={'게시물'} content={'게시물'} />
          )}
          <Masonry
            breakpointCols={BREAK_POINTS}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts?.pages?.map((page) => {
              return page?.data?.map((post: TPost) => <Info post={post} />);
            })}
          </Masonry>
          {isFetchingNextPage ? (
            <InfiniteLoadingSpinner />
          ) : (
            <div ref={ref}></div>
          )}
        </PostDiv>
      </MainDiv>
      {accessToken && (
        <PostBtn>
          <Link href="/posts/add">
            <TbPencil />
          </Link>
        </PostBtn>
      )}
    </>
  );
};

export default Posts;

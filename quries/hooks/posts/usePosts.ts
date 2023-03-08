import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { postApi } from '../../../services/api';
import { TPosts, TResponse } from '../../../lib/types/types';
import { QueryKeys } from '../../key';

type TFetchPosts<TResult> = (
  pageParam: number,
  areaSelected: string,
  search: string | null
) => TResult | Promise<TResult>;

export const fetchPosts: TFetchPosts<TResponse<TPosts>> = async (
  pageParam = 0,
  areaSelected = 'ALL',
  search = ''
) => {
  try {
    const res = search
      ? await postApi.getSearchPosts(pageParam, areaSelected, search)
      : await postApi.getPosts(pageParam, areaSelected);
    const { content: data, last } = res.data;
    return { data, nextPage: pageParam + 1, last };
  } catch (err) {
    console.log(err);
    // FIXME: toast 띄우는 걸로 바꾸자
    throw new Error('Failed to fetch posts');
  }
};

export function usePosts() {
  const [areaSelected, setAreaSelected] = useState('ALL');
  const [search, setSearch] = useState('');

  const {
    data: posts,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading
  } = useInfiniteQuery(
    [QueryKeys.posts, areaSelected, search],
    ({ pageParam = 0 }) => fetchPosts(pageParam, areaSelected, search),
    {
      getNextPageParam: (lastPage) =>
        !lastPage?.last ? lastPage?.nextPage : undefined,

      refetchOnWindowFocus: false,
      staleTime: 600000
    }
  );

  return {
    posts,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    isLoading,
    setSearch,
    areaSelected,
    setAreaSelected
  };
}

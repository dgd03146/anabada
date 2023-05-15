import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { postApi } from '../../../services/api';
import { TPosts, TResponse } from '../../../lib/types/types';
import { QueryKeys } from '../../key';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';
import { showToast } from '../../../components/layout/Toast/style';
import { AxiosError } from 'axios';

type getPosts<TResult> = (
  pageParam: number,
  areaSelected: string,
  search: string | null
) => TResult | Promise<TResult>;

export const getPosts: getPosts<TResponse<TPosts>> = async (
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
    if (err instanceof AxiosError)
      showToast({ type: 'error', message: err.message });
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
    ({ pageParam = 0 }) => getPosts(pageParam, areaSelected, search),
    {
      getNextPageParam: (lastPage) =>
        !lastPage?.last ? lastPage?.nextPage : undefined,
      staleTime: 60000,
      suspense: false,
      onError(err) {
        if (err instanceof AxiosError)
          showToast({ type: 'error', message: err.message });
      }
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

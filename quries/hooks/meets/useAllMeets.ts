import { QueryKeys } from '../../key';
import { meetsApi } from '../../../services/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';
import { TAllMeets, TResponse } from '../../../lib/types/types';

// FIXME: export해서 전역에서 사용하게
type TFetchPosts<TResult> = (
  pageParam: number,
  areaSelected: string,
  search: string | null
) => TResult | Promise<TResult>;

export const fetchPosts: TFetchPosts<TResponse<TAllMeets>> = async (
  pageParam = 0,
  areaSelected = 'ALL',
  search = ''
) => {
  try {
    const res = search
      ? await meetsApi.getSearchMeets(pageParam, areaSelected, search)
      : await meetsApi.getMeets(pageParam, areaSelected);
    const { content: data, last } = res.data;
    return { data, nextPage: pageParam + 1, last };
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error('Failed to fetch posts');
  }
};
export function useAllMeets() {
  const [areaSelected, setAreaSelected] = useState('ALL');
  const [search, setSearch] = useState('');

  const {
    data: allMeets,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    [QueryKeys.allMeets, areaSelected, search],
    ({ pageParam = 0 }) => fetchPosts(pageParam, areaSelected, search),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.last ? lastPage.nextPage : undefined
    }
  );

  return {
    allMeets,
    fetchNextPage,
    isFetchingNextPage,
    setSearch,
    setAreaSelected,
    areaSelected
  };
}

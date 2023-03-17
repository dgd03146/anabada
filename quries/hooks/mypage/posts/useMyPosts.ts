import { TResponse } from './../../../../lib/types/types';
import { myApi } from './../../../../services/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TMyPosts } from '../../../../lib/types/types';
import { QueryKeys } from '../../../key';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';
import { useState } from 'react';

type TgetMyPosts<TResult> = (
  pageParam: number,
  filter: string
) => Promise<TResult> | TResult;

const getMyPosts: TgetMyPosts<TResponse<TMyPosts>> = async (
  pageParam,
  filter
) => {
  try {
    const res = await myApi.getMyPosts(filter, pageParam);
    const data = res.data.content;
    const last = res.data.last;
    return { data, nextPage: pageParam + 1, last };
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error('Failed to fetch posts');
  }
};

const useMyposts = (state: string) => {
  const [filter, setFilter] = useState(state);

  const {
    data: myPosts,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    [QueryKeys.myPostsList, filter],
    ({ pageParam = 0 }) => getMyPosts(pageParam, filter),
    {
      getNextPageParam: (lastPage) =>
        !lastPage?.last ? lastPage?.nextPage : undefined,
      onError(err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    }
  );

  return { myPosts, fetchNextPage, isFetchingNextPage, filter, setFilter };
};

export default useMyposts;

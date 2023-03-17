import { TResponse, TMeets, TMyMeets } from './../../../../lib/types/types';
import { myApi } from './../../../../services/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../key';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';
import { useState } from 'react';

type TgetMyMeets<TResult> = (
  pageParam: number,
  filter: string
) => Promise<TResult> | TResult;

const getMyMeets: TgetMyMeets<TResponse<TMyMeets>> = async (
  pageParam,
  filter
) => {
  try {
    const res = await myApi.getMyMeets(filter, pageParam);
    const data = res.data.content;
    const last = res.data.last;
    return { data, nextPage: pageParam + 1, last };
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error('Failed to fetch posts');
  }
};

const useMyMeets = (state: string) => {
  const [filter, setFilter] = useState(state);

  const {
    data: myMeets,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    [QueryKeys.myMeetsList, filter],
    ({ pageParam = 0 }) => getMyMeets(pageParam, filter),
    {
      getNextPageParam: (lastPage) =>
        !lastPage?.last ? lastPage?.nextPage : undefined,
      onError(err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    }
  );

  return { myMeets, fetchNextPage, isFetchingNextPage, filter, setFilter };
};

export default useMyMeets;

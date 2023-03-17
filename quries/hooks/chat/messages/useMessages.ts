import { TMessages, TResponse } from './../../../../lib/types/types';
import { useInfiniteQuery } from '@tanstack/react-query';

import { useState } from 'react';
import { chatApi } from '../../../../services/api';
import { QueryKeys } from '../../../key';

import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';

type TFetchMessages<TResult> = (
  pageParam: number,
  __roomId: string | null
) => TResult | Promise<TResult>;

// 모임 전체 게시글
const fetchMessages: TFetchMessages<TResponse<TMessages>> = async (
  pageParam,
  __roomId
) => {
  try {
    const res = await chatApi.getMessages(pageParam, __roomId ? __roomId : '');
    const { content: data, last } = res.data;

    return { data, nextPage: pageParam + 1, last };
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error('Failed to fetch posts');
  }
};

export function useMessages() {
  const [__roomId, __setRoomId] = useState(null);

  const {
    data: messages,
    fetchNextPage,

    isFetchingNextPage
  } = useInfiniteQuery(
    [QueryKeys.messages, __roomId],
    ({ pageParam = 0 }) => fetchMessages(pageParam, __roomId),
    {
      select: (data) => ({
        ...data,
        pages: [...data.pages].reverse()
      }),

      getNextPageParam: (lastPage) =>
        !lastPage.last ? lastPage.nextPage : undefined,
      enabled: !!__roomId,
      refetchOnWindowFocus: false
    }
  );
  return {
    messages,
    __setRoomId,
    isFetchingNextPage,
    fetchNextPage
  };
}

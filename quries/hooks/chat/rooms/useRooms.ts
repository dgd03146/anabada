import { TResponse, TRooms } from './../../../../lib/types/types';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { chatApi } from '../../../../services/api';
import { QueryKeys } from '../../../key';
import useUser from '../../user/useUser';
import { useEffect } from 'react';

type TGetRooms<T> = (pageParam: number) => T | Promise<T>;

// 검색 모임 게시글
const getAllRooms: TGetRooms<TResponse<TRooms>> = async (pageParam) => {
  try {
    const res = await chatApi.getAllRooms(pageParam);
    const { content: data, last } = res.data;
    return { data, nextPage: pageParam + 1, last };
  } catch (error) {
    throw new Error('Failed to fetch comments');
  }
};

export function useRooms() {
  const { user } = useUser();
  const nickname = user?.nickname;
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries([QueryKeys.rooms, nickname], {
      refetchType: 'all'
    });
  }, []);

  // 모임 전체 게시글 useQuery
  const {
    data: rooms,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    [QueryKeys.rooms, nickname],
    ({ pageParam = 0 }) => getAllRooms(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.last ? lastPage.nextPage : undefined
    }
  );
  return {
    rooms,
    isFetchingNextPage,
    fetchNextPage
  };
}

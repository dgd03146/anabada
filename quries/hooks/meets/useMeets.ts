import { meetsApi } from './../../../services/api';
import { TMeets } from './../../../lib/types/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { QueryKeys } from '../../key';
import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';

type TFetchMeets<TResult> = (
  pageParam: number,
  areaSelected: string
) => TResult | Promise<TResult>;

// 모임 게시글
const fetchMeets: TFetchMeets<TMeets> = async (pageParam, areaSelected) => {
  try {
    const res = await meetsApi.getMeets(pageParam, areaSelected);
    return res.data;
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error('Failed to fetch posts');
  }
};

export function useMeets() {
  const [areaSelected, setAreaSelected] = useState('ALL');

  // 모임 게시글 useQuery
  const { data: meets } = useQuery(
    [QueryKeys.meets, areaSelected],
    ({ pageParam = 0 }) => fetchMeets(pageParam, areaSelected),
    {
      suspense: true,
      onError: () => {
        toast.error('모임 정보를 불러오는 중 오류가 발생했습니다!');
      }
    }
  );
  return { meets, areaSelected, setAreaSelected };
}

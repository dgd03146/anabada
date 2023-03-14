import { QueryKeys } from './../../key';
import { TMeets } from './../../../lib/types/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { meetsApi } from '../../../services/api';
import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';

type TfetchPopularMeets<TResult> = (area: string) => TResult | Promise<TResult>;

// 인기 모임 게시글
const fetchPopularMeets: TfetchPopularMeets<TMeets> = async (area) => {
  try {
    const res = await meetsApi.getPopularMeets(area);
    return res.data;
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error('Failed to fetch popular Meets');
  }
};

export function usePopularMeets() {
  const [popularAreaSelected, setPopularAreaSelected] = useState('ALL');

  // 인기 게시글 useQuery
  const { data: popularMeets } = useQuery(
    [QueryKeys.popularMeets, popularAreaSelected],
    () => fetchPopularMeets(popularAreaSelected),
    {
      suspense: true,
      onError: (error) => {
        console.error(error);
        toast.error('인기 모임 게시글을 불러오는 중 오류가 발생했습니다');
      }
    }
  );

  return {
    popularMeets,
    popularAreaSelected,
    setPopularAreaSelected
  };
}

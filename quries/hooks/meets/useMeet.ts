import { TMeet } from './../../../lib/types/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../key';
import { meetsApi } from '../../../services/api';

type TgetMeet<T> = (thunderPostId: string) => T | Promise<T>;

// 모임 상세 페이지
const getMeet: TgetMeet<TMeet> = async (thunderPostId) => {
  try {
    const res = await meetsApi.getMeetDetail(thunderPostId);
    return res.data;
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
  }
};

export function useMeet(thunderPostId: string) {
  const [isLiked, setIsLiked] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  // 모임 상세 useQuery
  const { data: meet } = useQuery(
    [QueryKeys.detailMeet, thunderPostId],
    () => getMeet(thunderPostId),
    {
      suspense: true,
      onSuccess: (data) => {
        toast.success('모임 정보를 불러왔습니다');
        setIsLiked(data.isLiked);
        setIsJoined(data.isJoined);
      },
      onError: (error) => {
        console.error(error);
        toast.error('모임 정보를 불러오는 중 오류가 발생했습니다');
      }
    }
  );

  return { meet, isLiked, setIsLiked, isJoined, setIsJoined };
}

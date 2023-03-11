import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { TSpot } from '../../../lib/types/types';
import { QueryKeys } from '../../key';

// FIXME: 바꾸기

export const useSpots = () => {
  const { data: spots } = useQuery<TSpot[]>(
    [QueryKeys.spots],
    async () => {
      // TODO: API interceptor 사용해서 바꾸기
      const response = await axios.get<TSpot[]>(
        `https://${process.env.REACT_APP_API_SERVER}/api/beach`
      );
      return response.data;
    },
    {
      // FIXME: 옵션도 바꾸자
      staleTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      onError(err) {
        // FIXME: console.log 대신 toast 띄우기
        console.log('에러가 발생했습니다!! ::: ', err);
      }
    }
  );
  return spots;
};

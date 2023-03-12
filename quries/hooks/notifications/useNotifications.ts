import { TOAST_MESSAGE } from './../../../constants/contstant';
import { TResponse } from './../../../lib/types/types';
import { ApiError } from 'next/dist/server/api-utils';
import { QueryKeys } from './../../key';
import { useInfiniteQuery } from '@tanstack/react-query';
import { notificationsApi } from '../../../services/api';
import { toast } from 'react-toastify';

type TFetchNotifications<TResult> = (
  pageParam: number
) => TResult | Promise<TResult>;

export type TNotification = {
  type: 'like' | 'comment';
  user: string;
  post: string;
  isRead: boolean;
  createdAt: string;
  isBadge: boolean;
};

const fetchNotifications: TFetchNotifications<
  TResponse<TNotification>
> = async (pageParam: number) => {
  try {
    const res = await notificationsApi.getNotifications(pageParam);
    const { data, last } = res.data;
    return {
      data,
      nextPage: pageParam + 1,
      last
    };
  } catch (err) {
    if (err instanceof ApiError) toast.error(err.message);
    throw new Error(TOAST_MESSAGE.GENERIC_ERROR);
  }
};

const useNotifications = () => {
  const {
    isSuccess,
    data: notifications,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    [QueryKeys.notifications],
    ({ pageParam = 0 }) => fetchNotifications(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage?.last ? lastPage?.nextPage : undefined,
      onError(err) {
        if (err instanceof ApiError) toast.error(err.message);
      },
      // FIXME: suspense 사용?
      suspense: true
    }
  );

  return { notifications, hasNextPage, fetchNextPage, isSuccess };
};

export default useNotifications;

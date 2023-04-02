import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useUser from '../../../quries/hooks/user/useUser';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query';
import { TNotifications, TResponse } from '../../types/types';

interface UseFetchOnScrollProps {
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<TResponse<TNotifications>, unknown>>;
  notifications: InfiniteData<TResponse<TNotifications>> | undefined;
  setNotificationsBadge: React.Dispatch<
    React.SetStateAction<{
      isBadge: boolean;
    }>
  >;
}

const useFetchOnScroll = ({
  fetchNextPage,
  notifications,
  setNotificationsBadge
}: UseFetchOnScrollProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    setNotificationsBadge((prev) => {
      return { ...prev, isBadge: true };
    });
    if (inView) {
      fetchNextPage();
    }
  }, [inView, notifications]);

  return { ref };
};

export default useFetchOnScroll;

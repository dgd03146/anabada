import { TNotification } from '../../types/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp, StompSubscription } from '@stomp/stompjs';

import { notificationsApi, SOCKET_SERVER_URL } from '../../../services/api';
import useGetToken from '../user/useGetToken';
import { getRefreshToken } from '../../../services/token';

const socketServerURL = SOCKET_SERVER_URL;

export const useNotifications = (userId?: string) => {
  const accessToken = useGetToken();
  const refreshToken = getRefreshToken();

  const socketRef = useRef<WebSocket>();
  const stompClientRef = useRef<CompatClient>();
  const subscriptionRef = useRef<StompSubscription>();

  const [notificationsBadge, setNotificationsBadge] = useState({
    isBadge: true
  });

  useEffect(() => {
    if (userId) {
      socketRef.current = new SockJS(socketServerURL);
      stompClientRef.current = Stomp.over(socketRef.current);

      stompClientRef.current.debug = () => {
        return;
      };

      if (!socketRef || !stompClientRef) return;

      stompClientRef.current.connect({}, () => {
        subscriptionRef.current = stompClientRef.current?.subscribe(
          `/topic/notification/${userId}`,
          (message) => {
            const body = JSON.parse(message.body);
            setNotificationsBadge((prev) => {
              const Body = {
                isBadge: body.badge
              };
              return {
                ...prev,
                ...Body
              };
            });
          }
        );
      });

      return () => {
        subscriptionRef.current?.unsubscribe();
        stompClientRef.current?.disconnect();
      };
    }
  }, [userId]);

  // FIXME: 제대로 동작할지? notification에서 해야하지 않나
  useEffect(() => {
    // 로그인을 했을 때 최초 쌓인 뱃지 요청하기(이후는 소캣 이용해서 업데이트 된다)
    if (refreshToken !== undefined && accessToken) {
      notificationsApi
        .checkNotifications({
          // accesstoken 넣어줄 필요 없지 않나?
          Authorization: accessToken as unknown as string
        })
        .then((res) => {
          return setNotificationsBadge((prev) => {
            return {
              ...prev,
              isBadge: res.data?.badge
            };
          });
        });
    }
  }, [refreshToken]);

  const unsubscribeNotification = useCallback(() => {
    subscriptionRef.current?.unsubscribe();
    stompClientRef.current?.disconnect();
  }, []);
  return {
    notificationsBadge,
    setNotificationsBadge,
    unsubscribeNotification
  };
};

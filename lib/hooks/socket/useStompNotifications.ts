import { TNotification } from '../../types/types';
import { useCallback, useEffect, useState } from 'react';

import { useWebSocketStomp } from './useWebSocketStomp';
import { notificationsApi, SOCKET_SERVER_URL } from '../../../services/api';

const socketServerURL = SOCKET_SERVER_URL;

export const useStompNotifications = (userId?: string) => {
  const { subscribe, isConnected, unsubscribe, disconnect } =
    useWebSocketStomp(socketServerURL);

  // 알림 뱃지가 있는지 state
  const [notificationsBadge, setNotificationsBadge] = useState({
    isBadge: true
  });

  useEffect(() => {
    if (!userId || !isConnected) return;
    subscribe<TNotification>(notificationsApi.topicUrl(userId), (body) => {
      setNotificationsBadge((prev) => {
        return {
          ...prev,
          isBadge: body.isBadge
        };
      });
    });

    return () => {
      // FIXME: 안 해줘도 될지도?
      unsubscribe(notificationsApi.topicUrl(userId));
      disconnect();
    };
  }, [userId, isConnected]);

  const unsubscribeNotification = useCallback(() => {
    userId && unsubscribe(notificationsApi.topicUrl(userId));
  }, []);

  return {
    notificationsBadge,
    setNotificationsBadge,
    unsubscribeNotification
  };
};

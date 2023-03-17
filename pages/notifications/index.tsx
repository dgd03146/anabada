import { useEffect } from 'react';
import Notification from '../../components/notifications';
import Navigate from '../../components/layout/navigate';
import NoData from '../../components/layout/noData/chat-notification';
import React from 'react';
import { useInView } from 'react-intersection-observer/useInView';
import useDeleteAllnotifications from '../../quries/hooks/notifications/useDeleteAllnotifications';
import useNotifications from '../../quries/hooks/notifications/useNotifications';
import useUser from '../../quries/hooks/user/useUser';
import { useNotificationStomp } from '../../lib/hooks/socket/useNotificationStomp';
import {
  Container,
  NotiAllDelete,
  NotificationContainer,
  NotificationWrapper
} from './style';

const Notifications = () => {
  const { ref, inView } = useInView();

  const { user } = useUser();
  // fetcher
  const { notifications, hasNextPage, fetchNextPage, isSuccess } =
    useNotifications();

  const { onDelteAllNotifications } = useDeleteAllnotifications();

  const { setNotificationsBadge } = useNotificationStomp(user?.userId!);

  useEffect(() => {
    setNotificationsBadge((prev) => {
      return { ...prev, isBadge: true };
    });
    if (inView) {
      fetchNextPage();
    }
  }, [inView, notifications]);

  const handleAllDelete = () => {
    const res = window.confirm('전체 알림을 삭제하시겠습니까?');
    if (res) {
      return onDelteAllNotifications();
    }
  };

  return (
    <Container>
      <NotificationWrapper>
        <Navigate text={'알림'} />
        {notifications?.pages[0].data.content.length === 0 && (
          <NoData text={'알림'} notification={true} />
        )}
        <NotificationContainer>
          {isSuccess &&
            notifications?.pages.map((page, pageIndex) => {
              const content = page.data.content;
              return content?.map((noti, notiIndex) => {
                if (
                  notiIndex === content.length - 1 &&
                  pageIndex === notifications.pages.length - 1 &&
                  hasNextPage
                ) {
                  return (
                    <Notification
                      key={noti.notificationId}
                      ref={ref}
                      {...noti}
                    />
                  );
                } else {
                  return <Notification key={noti.notificationId} {...noti} />;
                }
              });
            })}
        </NotificationContainer>
        <NotiAllDelete onClick={handleAllDelete}>
          <span className="material-symbols-outlined">delete</span>
        </NotiAllDelete>
      </NotificationWrapper>
    </Container>
  );
};

export default Notifications;

import { useEffect } from 'react';
import Notification from '../../components/notifications';
import Navigate from '../../components/layout/navigate';
import NoData from '../../components/layout/noData';

import React from 'react';
import { useInView } from 'react-intersection-observer/useInView';
import useDeleteAllnotifications from '../../quries/hooks/notifications/useDeleteAllnotifications';
import useGetNotifications from '../../quries/hooks/notifications/useGetNotifications';
import useUser from '../../quries/hooks/user/useUser';
import { useStompNotifications } from '../../lib/hooks/socket/useStompNotifications';
import {
  Container,
  NotiAllDelete,
  NotificationContainer,
  NotificationWrapper
} from './style';
import useFetchOnScroll from '../../lib/hooks/notification/usefetchOnscroll';

const Notifications = () => {
  const { user } = useUser();
  const userId = user && user.userId;
  const { notifications, hasNextPage, fetchNextPage, isSuccess } =
    useGetNotifications();
  const { onDelteAllNotifications } = useDeleteAllnotifications();
  const { setNotificationsBadge } = useStompNotifications(userId);
  const { ref } = useFetchOnScroll({
    notifications,
    fetchNextPage,
    setNotificationsBadge
  });

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

import {
  useInfiniteQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { api } from '../../shared/api';
import Notification from '../../components/notifications';
import { queryKeys } from '../../react-query/constants';
import Navigate from '../../components/layout/navigate';
import NoData from '../../components/nodata';
import React from 'react';
import { useInView } from 'react-intersection-observer/useInView';
import useDeleteAllnotifications from '../../quries/hooks/notifications/useDeleteAllnotifications';
import useNotifications from '../../quries/hooks/notifications/useNotifications';

const Notifications = ({ setNotifications }) => {
  const { ref, inView } = useInView();

  // fetcher
  const { notifications, hasNextPage, fetchNextPage, isSuccess } =
    useNotifications();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleAllDeleteMutation = async () => {
    try {
      return await api.delete(`/notifications`);
    } catch (err) {
      // alertHandler("서버와 통신이 불안정 합니다. 다시 시도해주세요.");
      return console.log(err);
    }
  };

  const { onDelteAllNotifications } = useDeleteAllnotifications();

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
        {notifications.pages[0].data.content.length === 0 && (
          <NoData text={'알림'} notification={true} />
        )}
        <NotificationContainer>
          {isSuccess &&
            notifications.pages.map((page, pageIndex) => {
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

const Container = styled.div`
  padding: 0rem 1rem;
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 40vw;
  }
`;

const NotificationWrapper = styled.div``;

const NotificationContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem 0;
`;

const NotiAllDelete = styled.div`
  position: fixed;
  z-index: 300;
  bottom: 1.7rem;
  right: 2.3rem;

  cursor: pointer;
  width: 60px;
  height: 60px;

  color: white;
  background-color: #007aff;
  opacity: 0.9;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  .material-symbols-outlined {
    font-weight: 500;
  }
`;

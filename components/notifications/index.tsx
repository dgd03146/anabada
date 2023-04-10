import React from 'react';
import Image from 'next/image';
import { TNotification } from '../../lib/types/types';
import { useRouter } from 'next/router';
import useDeleteNotification from '../../quries/hooks/notifications/useDeleteNotification';
import { notificationsApi } from '../../services/api';
import { toast } from 'react-toastify';
import { TOAST_MESSAGE } from '../../constants/contstant';
import {
  NotifiactionPerson,
  NotificationBox,
  NotificationContainer,
  NotificationDeleteButton,
  NotificationInfo,
  NotificationTitle,
  NotificationType
} from './style';

type TNotificationProps = {
  ref?: (node?: Element | null | undefined) => void;
} & TNotification;

const Notification = ({
  type,
  notificationId,
  post,
  user,
  isRead,
  ref
}: TNotificationProps) => {
  // 삭제 버튼 눌렀을 때 mutation
  const router = useRouter();

  const { onDeleteNotification } = useDeleteNotification();

  const handleDelete = () => {
    const res = window.confirm('정말 삭제하시겠습니까?');
    if (res) {
      onDeleteNotification(notificationId);
    }
  };

  const handleReadNotification = async () => {
    try {
      await notificationsApi.readNotification(notificationId);
      router.push(`/posts/${post.postId}`);
    } catch (err) {
      toast.error(TOAST_MESSAGE.GENERIC_ERROR);
    }
  };

  return (
    <>
      <NotificationContainer ref={ref}>
        <NotificationBox>
          <NotificationType>
            <Image
              src={
                type === 'like'
                  ? '/assets/noti_isliked.svg'
                  : '/assets/noti_message.svg'
              }
              alt=""
              width={30}
              height={30}
            />
          </NotificationType>

          <NotificationInfo onClick={handleReadNotification}>
            <NotifiactionPerson isRead={isRead}>
              {type === 'like'
                ? `${user?.nickname}님이 좋아요를 했습니다.`
                : `${user?.nickname}님이 댓글을 남겼습니다.`}
            </NotifiactionPerson>
            <NotificationTitle>{post?.title}</NotificationTitle>
          </NotificationInfo>
          <NotificationDeleteButton onClick={handleDelete}>
            <span className="material-symbols-outlined">close</span>
          </NotificationDeleteButton>
        </NotificationBox>
      </NotificationContainer>
    </>
  );
};

export default Notification;

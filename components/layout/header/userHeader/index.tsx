import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GrNotification } from 'react-icons/gr';
import { BsFillChatDotsFill } from 'react-icons/bs';

import useUser from '../../../../quries/hooks/user/useUser';
import { useNotifications } from '../../../../lib/hooks/socket/useNotifications';
import { NotificationContainer } from './style';

import { getRefreshToken } from '../../../../services/token';

const UserHeader = () => {
  const { user } = useUser();
  const { profileImg } = user || {};
  const refreshToken = getRefreshToken();

  const { notificationsBadge } = useNotifications(user?.userId);
  return (
    <div className="header__user">
      {refreshToken ? (
        <div className="header__user__info header__user__info-islogin">
          <Link href="/notifications">
            <NotificationContainer noti={notificationsBadge?.isBadge}>
              <GrNotification />
              <div className="notification__red"></div>
            </NotificationContainer>
          </Link>
          <Link href="/chat/room">
            <BsFillChatDotsFill />
          </Link>
          <Link href="/my/page">
            <Image
              src={
                profileImg
                  ? profileImg
                  : '/assets/illustrations/defaultImage.jpg'
              }
              alt="Profile Image"
              width={50}
              height={50}
            />
          </Link>
        </div>
      ) : (
        <>
          <Link href="/login">
            <div className="header__user__login">로그인</div>
          </Link>
          <div className="header__user__divider">
            <div></div>
          </div>
          <Link href="/signup">
            <div className="header__user__signup">회원가입</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserHeader;

import { Cookies } from 'react-cookie';
import React, { useState, useRef } from 'react';
import { storage } from '../../../firebase/firebase';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { myApi } from '../../../services/api';
import useUser from '../../../quries/hooks/user/useUser';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Image from 'next/image';
import FeedList from './feedList';
import {
  Email,
  LogoutDiv,
  Nickname,
  ProfileDiv,
  ProfileImgDiv,
  UserDiv
} from './style';
import { showToast } from '../../layout/Toast/style';

const MyPage = () => {
  const { user } = useUser();
  const nickname = user?.nickname;
  const profileImg = user?.profileImg;
  const email = user?.email;

  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string>('');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    // TODO: 클래스로 만들어서 관리.
    const cookies = new Cookies();
    cookies.remove('refreshToken');

    router.push('/home');
  };

  const handleImg = async () => {
    let uploadUrl;
    const reader = new FileReader();
    const image = fileInput.current?.files?.[0];

    if (!image) {
      return;
    }

    if (fileInput.current?.files?.length) {
      const uploaded_file = await uploadBytes(
        ref(storage, `images/profile/${fileInput.current?.files[0].name}`),
        fileInput.current?.files[0]
      );
      uploadUrl = await getDownloadURL(uploaded_file.ref);
    }

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgSrc(reader.result as string);
      }
    };
    reader.readAsDataURL(image);

    const updatedProfileImg = {
      profileImg: uploadUrl
    };

    const result = window.confirm('변경된 프로필 사진을 등록하시겠습니까?');
    if (result) {
      await myApi.uploadProfile(updatedProfileImg);
    } else {
      const deleteImg = ref(storage, uploadUrl);
      deleteObject(deleteImg)
        .then(() => {
          setImgSrc('');
        })
        .catch((err) => {
          return showToast({
            type: 'error',
            message: '프로필 이미지 변경 취소에 실패하였습니다!'
          });
        });
    }
  };

  return (
    <>
      <UserDiv>
        <ProfileDiv>
          <ProfileImgDiv>
            {profileImg && (
              <Image
                width={200}
                height={200}
                src={imgSrc ? imgSrc : profileImg}
                alt="profile"
              ></Image>
            )}
            <button
              onClick={() => {
                fileInput.current?.click();
              }}
            >
              <Image
                src="/assets/icons/upload.svg"
                alt="upload"
                width={24}
                height={24}
              />
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImg}
              ref={fileInput}
              name="profileImg"
            />
          </ProfileImgDiv>
        </ProfileDiv>
        <div>
          <Nickname>{nickname}</Nickname>
          <Email>{email}</Email>
        </div>
      </UserDiv>
      <FeedList type="posts" />
      <FeedList type="meets" />
      <LogoutDiv>
        <button onClick={handleLogout}>로그아웃</button>
      </LogoutDiv>
    </>
  );
};

export default MyPage;

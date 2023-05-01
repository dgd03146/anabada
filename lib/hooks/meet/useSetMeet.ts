import { ApiError } from 'next/dist/server/api-utils';
import { meetsApi } from './../../../services/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, UseFormSetValue } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TMeetWithThumbnailFile } from '../../../pages/meets/add';
import useUser from '../../../quries/hooks/user/useUser';

export const useSetMeet = (
  thunderPostId: string,

  setValue?: UseFormSetValue<TMeetWithThumbnailFile>
) => {
  const router = useRouter();
  const { user } = useUser();
  const nickname = user?.nickname;

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const fetchMeetDetails = async () => {
      try {
        const meetInfo = await meetsApi.getMeetDetail(thunderPostId);
        const isCurrentUser = meetInfo.data.nickname === nickname;
        if (!isCurrentUser) {
          toast.warn('수정 권한이 없습니다.');
          router.back();
          return;
        }

        // FIXME: 맞는지 확인
        if (!setValue) return;

        const {
          title,
          area,
          address,
          createdAt,
          endDate,
          meetDate,
          goalMember,
          content,
          thumbnailUrl
        } = meetInfo.data;
        setValue('title', title);
        setValue('area', area);
        setValue('address', address);
        setValue('createdAt', createdAt);
        setValue('endDate', endDate);
        setValue('meetDate', meetDate);
        setValue('goalMember', goalMember);
        setValue('content', content);
        setImgSrc(thumbnailUrl);
      } catch (err) {
        if (err instanceof ApiError) toast.error(err.message);
      }
    };

    if (thunderPostId) {
      fetchMeetDetails();
    }
  }, []);

  return {
    setValue,
    imgSrc,
    setImgSrc
  };
};

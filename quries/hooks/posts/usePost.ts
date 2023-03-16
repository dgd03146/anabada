import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { postApi } from '../../../services/api';
import { TPost } from '../../../lib/types/types';
import { QueryKeys } from '../../key';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';

type TgetPostDetail<T> = (postId: string) => T | Promise<T>;

const getPostDetail: TgetPostDetail<TPost> = async (postId: string) => {
  try {
    const res = await postApi.getPostDetail(`${postId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    if (err instanceof ApiError) toast.error(err.message);
  }
};

const usePost = (postId: string, liked: boolean) => {
  const { data: post } = useQuery(
    [QueryKeys.detailPost, liked, postId],
    () => getPostDetail(postId),
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.error(error);
        toast.error('게시글 정보를 불러오는 중 오류가 발생했습니다');
      }
    }
  );

  return { post };
};

export default usePost;

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { postApi } from '../../../services/api';
import { TPost } from '../../../lib/types/types';
import { QueryKeys } from '../../key';

type TgetPostDetail<T> = (postId: string) => T | Promise<T>;

const getPostDetail: TgetPostDetail<TPost> = async (postId: string) => {
  try {
    const res = await postApi.getPostDetail(`${postId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

const usePost = (postId: string, liked: boolean) => {
  const { data: post } = useQuery(
    [QueryKeys.detailPost, liked, postId],
    () => getPostDetail(postId),
    {
      refetchOnWindowFocus: false
    }
  );

  return { post };
};

export default usePost;

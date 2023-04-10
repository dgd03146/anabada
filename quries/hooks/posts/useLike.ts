import { TPost } from '../../../lib/types/types';
import { QueryKeys } from './../../key';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { queryClient } from '../../queryClient';
import { postApi } from '../../../services/api';
import { ApiError } from 'next/dist/server/api-utils';
import { toast } from 'react-toastify';

type TToggleLikeParams = {
  post: TPost;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
};

type TToggleLike = (params: TToggleLikeParams) => Promise<void>;

const toggleLike: TToggleLike = async ({ setLiked, post }) => {
  if (post && post.postId) {
    if (post.isLiked) {
      await postApi.deleteLike(post.postId);
      setLiked(false);
    } else {
      await postApi.postLike(post.postId);
      setLiked(true);
    }
  }
};

const useLike = () => {
  const { mutate: onToggleLike } = useMutation(
    (params: TToggleLikeParams) => toggleLike(params),
    {
      onSuccess: async () => {
        try {
          await queryClient.invalidateQueries([QueryKeys.myPostsList], {
            refetchType: 'all'
          });
        } catch (err) {
          if (err instanceof ApiError) toast.error(err.message);
        }
      },
      onError: (err) => {
        if (err instanceof ApiError) toast.error(err.message);
      }
    }
  );

  return { onToggleLike };
};

export default useLike;

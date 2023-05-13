import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { postApi } from '../../../services/api';
import { TPost } from '../../types/types';
import useUser from '../../../quries/hooks/user/useUser';

type TPostKey = keyof TPost;

const useSetPost = (
  setValue: (key: TPostKey, value: string) => void,
  setImgSrc: (imgSrc: string) => void,
  editorRef: React.RefObject<any>,
  postId?: string
) => {
  const router = useRouter();

  const { user } = useUser();
  const nickname = user?.nickname;

  useEffect(() => {
    if (postId) {
      const setPost = async () => {
        try {
          const postInfo = await postApi.getPostDetail(`${postId}`);

          console.log(postInfo, 'postInfo');

          if (postInfo.data.nickname !== nickname) {
            alert('수정 권한이 없습니다.');
            router.back();
            return;
          }

          const {
            title,
            area,
            address,
            createAt,
            content,
            amenity,
            thumbnailUrl
          } = postInfo.data;

          console.log(content, '✨✨✨');

          const valuesToSet = {
            title: title,
            area: area,
            address: address,
            createAt: createAt,
            content: content,
            amenity: amenity
          };

          Object.entries(valuesToSet).forEach(([key, value]) => {
            if (key in valuesToSet) {
              setValue(key as TPostKey, value);
            }
          });

          setImgSrc(thumbnailUrl);

          const htmlString = content;
          console.log(htmlString, 'htmlString');
          editorRef.current?.getInstance().setHTML(htmlString);
        } catch (err) {
          console.error(err);
        }
      };
      setPost();
    }
  }, []);
};

export default useSetPost;

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase';
import { TPostImg } from '../types/types';

export const uploadThumbnailImage = async (
  postId: string,
  postImg?: TPostImg[],
  imgSrc?: string
) => {
  let thumbnailUrl;
  if (postImg && postImg.length > 0) {
    console.log(postImg[0], 'test테스트텟트ㅡ');
    console.log(postImg[0].name, '파일 이미지 이름');
    const fileRef = ref(storage, `images/post/${postImg[0].name}`);
    console.log(fileRef, 'fileRef'); // Check the file reference

    const uploaded_file = await uploadBytes(
      ref(storage, `images/post/${postImg[0].name}`),
      postImg[0]
    );

    thumbnailUrl = await getDownloadURL(uploaded_file.ref);
  } else if (postId) {
    thumbnailUrl = imgSrc;
  } else {
    thumbnailUrl = '';
  }

  return thumbnailUrl;
};

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase';
import { TPostImg } from '../types/types';

export const uploadThumbnailImage = async (
  postId: string,
  postImg?: TPostImg[],
  imgSrc?: string
) => {
  console.log('upload 썸네일 이미지 함수 실행중');
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
    console.log(uploaded_file, '업로드 파일?');

    thumbnailUrl = await getDownloadURL(uploaded_file.ref);
    console.log(thumbnailUrl, '썸네일 유알엘 찍힘?');
  } else if (postId) {
    thumbnailUrl = imgSrc;
  } else {
    thumbnailUrl = '';
  }

  console.log(thumbnailUrl, '여기까지 찍히나?');
  return thumbnailUrl;
};

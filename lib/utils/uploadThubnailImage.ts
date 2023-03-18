import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FirebaseStorage } from 'firebase/storage';
import { TPostImg } from '../types/types';

const DEFAULT_THUMBNAIL_URL = '';

export const uploadThumbnailImage = async (
  postImg: TPostImg[] | undefined,
  imgSrc: string | undefined,
  storage: FirebaseStorage
): Promise<string> => {
  let thumbnailUrl = DEFAULT_THUMBNAIL_URL;
  const [file] = postImg || [];
  if (file) {
    const uploadedFile = await uploadBytes(
      ref(storage, `images/post/${file.name}`),
      file.file
    );
    thumbnailUrl = await getDownloadURL(uploadedFile.ref);
  } else if (imgSrc) {
    thumbnailUrl = imgSrc;
  }
  return thumbnailUrl;
};

import { useRouter } from 'next/router';
import React, { ChangeEvent, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { AMENITY_CHECK } from '../../../constants/contstant';
import { AmenityInfo } from '../../../data/amenityinfo';
import useAddPost from '../../../quries/hooks/posts/useAddPost';
import { TPost } from '../../../lib/types/types';
import { flatten } from 'lodash';
import dynamic from 'next/dynamic';
import { Categories } from '../../../components/common/categories';
import {
  AmenityButton,
  Container,
  ImageLabel,
  PostBtnDiv,
  PostForm,
  SelectAmenity
} from './style';

import { toast } from 'react-toastify';
import { ApiError } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { Editor } from '@toast-ui/react-editor';
import { uploadThumbnailImage } from '../../../lib/utils/uploadThubnailImage';
import useSetPost from '../../../lib/hooks/post/useSetPost';
import Loading from '../../../components/loading';

const ToastEditor = dynamic(
  () => import('../../../components/posts/post/editor'),
  { ssr: false, loading: () => <Loading /> }
);

const PostAdd = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid }
  } = useForm<TPost>({
    mode: 'all'
  });

  const [imgSrc, setImgSrc] = useState('');
  const [check, setCheck] = useState<{ [key: string]: boolean }>(AMENITY_CHECK);

  console.log(check, 'check🧨🎇🎆');

  const [content, setContent] = useState('');
  const editorRef = useRef<Editor | null>(null);

  const router = useRouter();
  const postId = router.query.postId as string;
  const flattenedAmenities = flatten(AmenityInfo);
  console.log(AmenityInfo, ' amenity info');

  const { onAdd } = useAddPost();
  useSetPost(setValue, setImgSrc, editorRef, postId);

  const handlePreviewImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && typeof event.target.result === 'string') {
        setImgSrc(event.target.result);
      }
    };
    reader.readAsDataURL(image);
  };

  const handleCheckAmenity = (el: {
    id: number;
    text: string;
    value: string;
  }) => {
    setCheck({
      ...check,
      [el.value]: !check[el.value]
    });
  };

  const onSubmit = async (formData: TPost) => {
    try {
      const confirmed = window.confirm('게시물을 등록하시겠습니까?');
      if (!confirmed) return;

      const thumbnailUrl = await uploadThumbnailImage(
        postId,
        formData.postImg,
        imgSrc
      );

      const amenity = Object.values(check).filter(Boolean).join(' ');

      const newPost: TPost = {
        title: formData.title,
        area: formData.area,
        address: formData.address,
        content: content,
        amenity: amenity,
        thumbnailUrl: thumbnailUrl
      };
      onAdd({ newPost, postId });
    } catch (err) {
      if (err instanceof ApiError) toast.error(err.message);
    }
  };

  return (
    <>
      <PostForm onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목을 입력해 주세요"
            autoComplete="off"
            {...register('title', {
              required: true
            })}
          />
        </Container>
        <Container>
          <label>대표 이미지 등록</label>
          <ImageLabel>
            <Image
              src={imgSrc ? imgSrc : '/assets/illustrations/readyImage.png'}
              alt="Ready Image"
              width={400}
              height={400}
            />
            <div className="buttonDiv">
              <input
                type="file"
                accept="image/*"
                id="img_input"
                {...register('postImg', {
                  onChange: (e) => handlePreviewImage(e)
                })}
              />
              <label className="uploadBtn" htmlFor="img_input">
                첨부
              </label>
            </div>
          </ImageLabel>
        </Container>
        <Container>
          <label>위치 정보</label>
          <p className="warningtext">위치를 정확하게 입력해주세요.</p>
          <select
            id="area"
            {...register('area', {
              required: true
            })}
          >
            <Categories />
          </select>
        </Container>
        <Container>
          <input
            type="text"
            placeholder="상세주소를 입력해 주세요"
            autoComplete="off"
            {...register('address', {
              required: true
            })}
          />
        </Container>
        <Container>
          <label>주변 정보</label>
          <SelectAmenity>
            {flattenedAmenities.map((el) => (
              <AmenityButton
                type="button"
                active={check[el.value]}
                check={check[el.value]}
                className="amenityBtn"
                onClick={() => handleCheckAmenity(el)}
                key={el.id}
              >
                {el.text}
              </AmenityButton>
            ))}
          </SelectAmenity>
        </Container>
        <ToastEditor setContent={setContent} editorRef={editorRef} />
        <PostBtnDiv>
          <button type="submit" disabled={!isValid}>
            게시글 {postId ? '수정' : '등록'} 하기
          </button>
        </PostBtnDiv>
      </PostForm>
    </>
  );
};

export default PostAdd;

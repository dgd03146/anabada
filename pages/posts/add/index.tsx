import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '../../App.css';
import { Editor } from '@toast-ui/react-editor';
import { useForm } from 'react-hook-form';
import { AMENITY_CHECK } from '../../../constants/contstant';
import { postApi } from '../../../services/api';
import { AmenityInfo } from '../../../data/amenityinfo';
import useCreatePost from '../../../quries/hooks/posts/useCreatePost';
import { TPost } from '../../../lib/types/types';
import { flatten } from 'lodash';
import { storage } from '../../../firebase/firebase';
import { Categories } from '../../../components/common/categories';
import {
  AmenityButton,
  Container,
  ImageLabel,
  PostBtnDiv,
  PostForm,
  SelectAmenity,
  Toastdiv
} from './style';

type TPostKey = keyof TPost;

const PostAdd = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [check, setCheck] = useState<{ [key: string]: boolean }>(AMENITY_CHECK);
  const [content, setContent] = useState('');
  const editorRef = useRef<Editor | null>(null);
  const router = useRouter();

  const postId = router.query.postId as string;
  const nickname = 'nickname'; // FIXME: 닉네임 리덕스에서 받아오는데 리액트쿼리에서 받아오게
  // const nickname = useSelector((state) => state.auth.nickname);
  const flattenedAmenities = flatten(AmenityInfo);

  const { onCreate } = useCreatePost();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid }
  } = useForm<TPost>({
    mode: 'all'
  });

  useEffect(() => {
    if (postId) {
      const setPost = async () => {
        const postInfo = await postApi.getPostDetail(`${postId}`);

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
        editorRef.current?.getInstance().setHTML(htmlString);
      };
      setPost();
    }
  }, []);

  const previewImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && typeof event.target.result === 'string') {
        setImgSrc(event.target.result);
      }
    };
    reader.readAsDataURL(image);
  };

  const checkAmenity = (el: { id: number; text: string; value: string }) => {
    setCheck({
      ...check,
      [el.value]: !check[el.value]
    });
  };

  const DEFAULT_THUMBNAIL_URL = '';

  const onSubmit = async (formData: TPost) => {
    try {
      const [file] = formData.postImg || [];
      let thumbnailUrl = '';
      if (file) {
        const uploadedFile = await uploadBytes(
          ref(storage, `images/post/${file.name}`),
          file.file
        );
        thumbnailUrl = await getDownloadURL(uploadedFile.ref);
      } else if (postId) {
        thumbnailUrl = imgSrc;
      }

      const newPost: TPost = {
        title: formData.title,
        area: formData.area,
        address: formData.address,
        content: content,
        amenity: `${check.airgun} ${check.shower} ${check.shop} ${check.cafe} ${check.park} ${check.sleep}`,
        thumbnailUrl: thumbnailUrl || DEFAULT_THUMBNAIL_URL
      };

      onCreate({ newPost, postId });
    } catch (error) {
      console.error(error);
      // TODO: 에러 처리하기
      // Handle the error here
    }
  };

  //toast ui
  const handleChangeInput = () => {
    setContent(editorRef.current!.getInstance().getHTML());
  };

  type UploadImageCallback = (imageUrl: string, message: string) => void;

  const onUploadImage = async (
    blob: Blob | File,
    callback: UploadImageCallback
  ) => {
    let formData = new FormData();
    formData.append('file', blob);
    try {
      const { data: url } = await postApi.uploadImages(formData);
      callback(url.url, '콜백 이미지 URL');
    } catch (error) {
      console.error(error);
      // TODO: 에러 처리하기
      // handle error here
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
            {imgSrc ? (
              <img src={imgSrc} alt="" />
            ) : (
              <img
                className="noneImg"
                alt="ready"
                src="/assets/readyImage.png"
              />
            )}
            <div className="buttonDiv">
              <input
                type="file"
                accept="image/*"
                id="img_input"
                {...register('postImg', {
                  onChange: (e) => previewImage(e)
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
                onClick={() => checkAmenity(el)}
                key={el.id}
              >
                {el.text}
              </AmenityButton>
            ))}
          </SelectAmenity>
        </Container>

        <Toastdiv>
          <label>본문</label>
          <Editor
            ref={editorRef}
            placeholder="내용을 입력해주세요."
            previewStyle="vertical" // 미리보기 스타일 지정
            height="300px" // 에디터 창 높이
            initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
            onChange={handleChangeInput}
            useCommandShortcut={true}
            // colorSyntax 플러그인 적용
            plugins={[
              [
                colorSyntax,
                // 기본 색상 preset 적용
                {
                  preset: ['#1F2E3D', '#4c5864', '#ED7675']
                }
              ]
            ]}
            toolbarItems={[
              // 툴바 옵션 설정
              ['heading', 'image', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol'],
              ['link']
            ]}
            previewHighlight={false}
            hooks={{
              addImageBlobHook: onUploadImage
            }}
          ></Editor>
        </Toastdiv>
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

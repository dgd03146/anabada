import React, { ChangeEvent } from 'react';
import { storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import useUser from '../../../quries/hooks/user/useUser';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ThumbnailFile, TMeet } from '../../../lib/types/types';
import { ApiError } from 'next/dist/server/api-utils';
import { useSetMeet } from '../../../lib/hooks/meet/useSetMeet';
import { Categories } from '../../../components/common/categories';
import { Container, ImageLabel } from './style';
import { useAddMeet } from '../../../quries/hooks/meets/useAddMeet';
import MeetForm from '../../../components/meets/meetForm';

export type TMeetWithThumbnailFile = Omit<TMeet, 'thumbnailUrl'> & {
  thumbnailUrl: ThumbnailFile[];
};

const MeetAdd = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { isValid }
  // } = useForm<TMeetWithThumbnailFile>({
  //   mode: 'all'
  // });

  // const { user } = useUser();
  // const nickname = user?.nickname;

  // const router = useRouter();
  // console.log(router.query, '라우터 쿼리');
  // const thunderPostId = router.query.thunderPostId as string;
  // console.log(thunderPostId, 'thunderPostId');
  // const { imgSrc, setImgSrc } = useSetMeet(thunderPostId, nickname, setValue);

  // const { onAdd } = useAddMeet();

  // const handlePreviewImage = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const image = e.target.files![0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(image);

  //   return new Promise<void>((resolve) => {
  //     reader.onload = () => {
  //       setImgSrc(reader.result as string);
  //       resolve();
  //     };
  //   });
  // };

  // const onSubmit = async (formData: TMeetWithThumbnailFile) => {
  //   try {
  //     const thumbnailFile = formData.thumbnailUrl[0];
  //     let thumbnailUrl = '';

  //     if (thumbnailFile) {
  //       const fileRef = ref(storage, `images/meet/${thumbnailFile.name}`);
  //       const uploadedFile = await uploadBytes(fileRef, thumbnailFile);
  //       thumbnailUrl = await getDownloadURL(uploadedFile.ref);
  //     } else if (thunderPostId) {
  //       thumbnailUrl = imgSrc;
  //     }

  //     const newMeet = {
  //       ...formData,
  //       thumbnailUrl
  //     };

  //     onAdd({ newMeet, thunderPostId });
  //   } catch (err) {
  //     if (err instanceof ApiError) {
  //       toast.error(err.message);
  //     }
  //   }
  // };

  return (
    <MeetForm />
    // <Container>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <p>제목</p>
    //       <input
    //         type="text"
    //         autoComplete="off"
    //         placeholder="제목을 입력해주세요"
    //         {...register('title', {
    //           required: '제목을 입력해주세요'
    //         })}
    //       />
    //     </div>
    //     <ImageLabel>
    //       <p>썸네일</p>
    //       <div className="imgBox">
    //         <Image
    //           className="noneImg"
    //           alt="thumbnail"
    //           src={imgSrc ? imgSrc : '/assets/illustrations/readyImage.png'}
    //           width={300}
    //           height={200}
    //         />
    //         <div className="buttonDiv">
    //           <input
    //             type="file"
    //             accept="image/*"
    //             {...register('thumbnailUrl', {
    //               onChange: (e) => handlePreviewImage(e)
    //             })}
    //             id="img_input"
    //           />
    //           <label className="uploadBtn" htmlFor="img_input">
    //             첨부
    //           </label>
    //         </div>
    //       </div>
    //     </ImageLabel>
    //     <div>
    //       <p>지역</p>
    //       <select
    //         id="area"
    //         {...register('area', {
    //           required: '지역을 입력해주세요'
    //         })}
    //       >
    //         <Categories />
    //       </select>
    //     </div>
    //     <div>
    //       <p>위치 정보</p>
    //       <input
    //         type="text"
    //         {...register('address', {
    //           required: '주소를 입력해주세요'
    //         })}
    //       />
    //     </div>
    //     <div>
    //       <p>모집 인원</p>
    //       <input
    //         type="number"
    //         {...register('goalMember', {
    //           required: '모집 인원을 입력해주세요'
    //         })}
    //       />
    //     </div>
    //     <div className="dateBox">
    //       <p>종료일</p>
    //       <input
    //         type="date"
    //         min={new Date().toISOString().split('T')[0]}
    //         {...register('endDate', {
    //           required: '종료일을 입력해주세요'
    //         })}
    //       />
    //     </div>
    //     <div>
    //       <p>모임일</p>
    //       <input
    //         type="date"
    //         min={new Date().toISOString().split('T')[0]}
    //         {...register('meetDate', {
    //           required: '모임일을 입력해주세요'
    //         })}
    //       />
    //     </div>
    //     <div>
    //       <p>모임 상세 내용</p>
    //       <textarea
    //         className="textArea"
    //         cols={30}
    //         rows={10}
    //         {...register('content', {
    //           required: '상세 내용을 입력해주세요'
    //         })}
    //       />
    //     </div>
    //     <button type="submit" disabled={!isValid}>
    //       모임 {thunderPostId ? '수정' : '등록'} 하기
    //     </button>
    //   </form>
    // </Container>
  );
};

export default MeetAdd;

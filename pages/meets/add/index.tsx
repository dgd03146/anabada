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
  return <MeetForm />;
};

export default MeetAdd;

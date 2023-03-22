import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, Title } from './style';

export type TNavigateProps = {
  text: string;
  padding?: boolean;
  profileImg?: string;
};

const Navigate = ({ text, padding, profileImg }: TNavigateProps) => {
  const router = useRouter();
  return (
    <>
      <Container padding={padding ? true : false}>
        <button onClick={() => router.back()}>
          <Image
            src={'/assets/icons/navigate.svg'}
            alt="Navigate SVG"
            width={9}
            height={14}
          />
        </button>
        {profileImg && <img src={profileImg} alt="" />}
        <Title>{text}</Title>
      </Container>
    </>
  );
};

export default Navigate;

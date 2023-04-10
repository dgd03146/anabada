import Image from 'next/image';
import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import { Container, LoadingContainer } from './style';

const Loading = () => {
  return (
    <Container>
      <Image
        src={'/assets/illustrations/waterwave.gif'}
        width={100}
        height={100}
        alt="Loading spinner"
      />
    </Container>
  );
};

export const InfiniteLoading = () => {
  <LoadingContainer>
    <CircleLoader color="#007AFF" size={100} speedMultiplier={1} />;
  </LoadingContainer>;
};

export default Loading;

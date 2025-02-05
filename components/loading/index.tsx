import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import styled from 'styled-components';
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <Container>
      <Image
        src={'/assets/illustrations/waterwave.gif'}
        alt="Loading Spinner"
        width={100}
        height={100}
      />
    </Container>
  );
};

export const InfiniteLoadingSpinner = () => {
  return (
    <LoadingContainer>
      <CircleLoader color="#007AFF" size={50} speedMultiplier={1} />;
    </LoadingContainer>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default LoadingSpinner;

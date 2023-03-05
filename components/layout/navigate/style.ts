import styled from 'styled-components';
import { TNavigateProps } from '.';

export const Container = styled.div<Pick<TNavigateProps, 'padding'>>`
  display: flex;
  align-items: center;
  padding: 0.7rem ${(props) => (props.padding ? '1rem' : '0')};

  button {
    padding: 0;
    margin-right: 0.5rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

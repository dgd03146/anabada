import styled from 'styled-components';

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  div {
    margin-right: 1.25rem;
    display: flex;
    flex-direction: column;
  }
`;
export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileImgDiv = styled.div`
  position: relative;
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
  button {
    position: absolute;
    border-radius: 1rem;
    right: 0;
    bottom: 0;
  }
  input {
    display: none;
  }
`;

export const Nickname = styled.span`
  font-size: 1.3125rem;
  font-weight: 600;
`;

export const Email = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #8e8e93;
`;

export const LogoutDiv = styled.div`
  button {
    font-size: 0.9375rem;
    font-weight: 600;
    text-align: center;
    color: #8e8e93;
    margin-top: 2.125rem;
    margin-bottom: 2.125rem;
  }
`;

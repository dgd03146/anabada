import { TSpot } from './../../types/types';
import styled, { keyframes } from 'styled-components';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';

export const MarkerStyle = [
  {
    // calculator 각 사이 값 마다 적용될 스타일을 지정한다
    width: '1.875rem',
    height: '1.875rem',
    background: '#007AFF',
    backgroundImage: 'url("/assets/icon3.png")',
    borderRadius: '50%',
    fontSize: '0.7rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '1.1rem',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  {
    width: '3.125rem',
    height: '3.125rem',
    background: '#007AFF',
    backgroundImage: 'url("/assets/icon2.png")',
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '1.8rem',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  {
    width: '4.375rem',
    height: '4.375rem',
    fontSize: '0.9rem',
    backgroundImage: 'url("/assets/icon1.png")',
    borderRadius: '50%',
    background: '007AFF',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '2.4rem',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  }
];

export const MapWrapper = styled(Map)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const OverlayMap = styled(CustomOverlayMap)``;

type TMapPicker = {
  isClicked: boolean;
};

export const MapPicker = styled.div<TMapPicker>`
  position: relative;
`;

export const PickerInfo = styled.div`
  position: absolute;
  top: 40%;
  bottom: 50%;
  left: 48%;
  right: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div:last-child {
    margin-top: -0.2rem;
  }
`;

export const placeInfoAnimation = keyframes`
  0%{
    opacity: 0;
    bottom: 0;
  }
  10%{
    opacity: 1;
    bottom: 1.125rem;
  }
  100%{
    opacity: 1;
    bottom: 1.125rem;
  }
`;

export const PlaceInfo = styled.div`
  position: fixed;
  width: 90%;
  z-index: 500;
  border-radius: 10px;
  padding: 0.4rem;
  animation: ${placeInfoAnimation} 3s ease-in-out forwards;

  margin: 0 auto;
  left: 0;
  right: 0;
`;

type TInfoTitle = {
  picker: TSpot;
};

export const InfoTitle = styled.div<TInfoTitle>`
  h3 {
    margin: 0;
  }
`;

export const ExtraInfoContainer = styled.div`
  color: #8e8e93;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ExtraInfoWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.3125rem 1rem;
  &:last-child {
    display: flex;
    flex-wrap: wrap;
    & > div {
      margin: 0.1rem;
      margin-right: 0.5rem;
      color: black;
    }
  }
`;

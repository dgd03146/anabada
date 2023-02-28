import styled, { keyframes } from 'styled-components';
// import checkedWeather from '../../styles/weather';
import { Map, CustomOverlayMap, MarkerClusterer } from 'react-kakao-maps-sdk';
import React from 'react';
import { Picker } from '../../constants/contstant';

export type MapProps = {
  picker: typeof Picker;
  setPicker: (value: typeof Picker) => void;
};

const KakaoMap = ({ spots, picker, setPicker }) => {
  const handlePicker = (pickerInfo) => {
    setPicker((prev) => {
      return { ...prev, ...pickerInfo };
    });
  };

  return (
    <>
      <MapWrapper
        center={{ lat: picker.x, lng: picker.y }}
        level={picker.beachId === -1 ? 13 : 5}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
          calculator={[10, 30, 50]}
          styles={[
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
          ]}
        >
          {data.data.map((el) => {
            const weatherIcons = checkedWeather(el.sky, el.pty);
            return (
              // 커스텀 오버레이가 표시될 위치입니다
              <OverlayMap
                key={el.beachId}
                position={{
                  lat: el.x,
                  lng: el.y
                }}
                xAnchor={0.3}
                yAnchor={0.5}
              >
                <MapPicker
                  onClick={() => handlePicker(el)}
                  isClicked={picker.beachId === el.beachId}
                >
                  {picker.beachId === el.beachId ? (
                    <img src="/weatherIcons/bluebg.svg" alt=""></img>
                  ) : (
                    <img src="/weatherIcons/whitebg.svg" alt=""></img>
                  )}
                  <PickerInfo>
                    <div>
                      <img src={weatherIcons} alt=""></img>
                    </div>
                    <div>{el.tmp}</div>
                  </PickerInfo>
                </MapPicker>
              </OverlayMap>
            );
          })}
        </MarkerClusterer>
        {picker.beachId !== -1 && (
          <PlaceInfo>
            <ExtraInfoContainer>
              <InfoTitle picker={picker}>
                <div className="plcae__name">
                  <h3>{picker.beachName}</h3>
                </div>
                <ExtraInfo>
                  <div>
                    <img src="/weatherIcons/map_pin.svg" alt=""></img>
                  </div>
                  <div>
                    <span>{picker.beachName}</span>
                  </div>
                </ExtraInfo>
              </InfoTitle>
            </ExtraInfoContainer>
            <ExtraInfoContainer className="extra__info">
              <ExtraInfo>
                <div>
                  <span className="material-symbols-outlined">waves</span>
                </div>
                <div>
                  <span>예상파고 : {picker.wav}M</span>
                </div>
              </ExtraInfo>
              <ExtraInfo>
                <div>
                  <span className="material-symbols-outlined">air</span>
                </div>
                <div>
                  <span>풍속 : {picker.wsd}m/s</span>
                </div>
              </ExtraInfo>
              <ExtraInfo>
                <div>
                  <span className="material-symbols-outlined">water_drop</span>
                </div>
                <div>
                  <span>강수확률 : {picker.pop}%</span>
                </div>
              </ExtraInfo>
              <ExtraInfo>
                <div>
                  <span className="material-symbols-outlined">umbrella</span>
                </div>
                <div>
                  {picker.pcp === '강수없음' ? (
                    <span>강수량 : {picker.pcp}</span>
                  ) : (
                    <span>강수량 : {picker.pcp}mm</span>
                  )}
                </div>
              </ExtraInfo>
            </ExtraInfoContainer>
          </PlaceInfo>
        )}
      </MapWrapper>
    </>
  );
};

export default KakaoMap;

const MapWrapper = styled(Map)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const OverlayMap = styled(CustomOverlayMap)``;

const MapPicker = styled.div`
  position: relative;
`;

const PickerInfo = styled.div`
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

const placeInfoAnimation = keyframes`
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

const PlaceInfo = styled.div`
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

const InfoTitle = styled.div`
  h3 {
    margin: 0;
  }
`;

const ExtraInfo = styled.div`
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

const ExtraInfoContainer = styled.div`
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

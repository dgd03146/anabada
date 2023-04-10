import { MarkerClusterer } from 'react-kakao-maps-sdk';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { TSpot } from '../../lib/types/types';
import { useSpots } from '../../quries/hooks/spots/useSpots';
import Image from 'next/image';
import {
  ExtraInfoContainer,
  ExtraInfoWrapper,
  InfoTitle,
  MapPicker,
  MapWrapper,
  MarkerStyle,
  OverlayMap,
  PickerInfo,
  PlaceInfo
} from './style';
import checkWeather from '../../lib/utils/checkWeather';
import ExtraInfo from './extraInfo';
import Script from 'next/script';
import Head from 'next/head';

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

// const { kakao } = window;

// const REACT_APP_MAP_KEY = process.env.REACT_APP_MAP_KEY;

export type TMapProps = {
  picker: TSpot;
  setPicker: Dispatch<SetStateAction<TSpot>>;
  spots: TSpot[];
};

const KakaoMap = ({ picker, setPicker }: TMapProps) => {
  const spots = useSpots();
  const isBeach = picker.beachId === -1;
  const latitude = picker.x;
  const longitude = picker.y;

  const handlePicker = (pickerInfo: TSpot) => {
    setPicker((prev) => {
      return { ...prev, ...pickerInfo };
    });
  };

  return (
    <>
      <MapWrapper
        center={{ lat: latitude, lng: longitude }}
        level={isBeach ? 13 : 5}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
          calculator={[10, 30, 50]}
          styles={MarkerStyle}
        >
          {spots?.map((el) => {
            const weatherIcons = checkWeather(el.sky, el.pty);
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
                    <Image
                      src="assets/weatherIcons/bluebg.svg"
                      alt="bluebg"
                      width={64}
                      height={64}
                    />
                  ) : (
                    <Image
                      src="assets/weatherIcons/whitebg.svg"
                      alt="whitebg"
                      width={64}
                      height={64}
                    />
                  )}
                  <PickerInfo>
                    <div>
                      {weatherIcons && (
                        <Image
                          src={weatherIcons}
                          alt=""
                          width={32}
                          height={32}
                        />
                      )}
                    </div>
                    <div>{el.tmp}</div>
                  </PickerInfo>
                </MapPicker>
              </OverlayMap>
            );
          })}
        </MarkerClusterer>
        {!isBeach && (
          <PlaceInfo>
            <ExtraInfoWrapper>
              <InfoTitle picker={picker}>
                <div className="plcae__name">
                  <h3>{picker.beachName}</h3>
                </div>
                <ExtraInfoContainer>
                  <div>
                    <img src="/assets/weatherIcons/map_pin.svg" alt=""></img>
                  </div>
                  <div>
                    <span>{picker.beachName}</span>
                  </div>
                </ExtraInfoContainer>
              </InfoTitle>
            </ExtraInfoWrapper>
            <ExtraInfoWrapper className="extra__info">
              <ExtraInfo
                title="waves"
                content="예상 파고"
                value={picker.wav}
                measure="M"
              />
              <ExtraInfo
                title="air"
                content="풍속 : "
                value={picker.wsd}
                measure="m/s"
              />
              <ExtraInfo
                title="water_drop"
                content="강수확률 : "
                value={picker.wsd}
                measure="%"
              />
              <ExtraInfo
                title="umbrella"
                content="강수량 : "
                value={picker.pcp}
                measure={picker.pcp === '강수없음' ? '' : 'mm'}
              />
            </ExtraInfoWrapper>
          </PlaceInfo>
        )}
      </MapWrapper>
    </>
  );
};

export default KakaoMap;

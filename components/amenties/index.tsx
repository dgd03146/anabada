import React from 'react';

type TAmenityProps = {
  amenities: string[];
};

const AmentyInfo = ({ amenities }: TAmenityProps) => {
  return (
    <ul>
      {amenities.map((amenity, index) => {
        if (amenity === 'true') {
          switch (index) {
            case 0:
              return <li key="airgun">💨 에어건이 있어요</li>;
            case 1:
              return <li key="surfingShop">🏄 서핑샵이 있어요</li>;
            case 2:
              return <li key="showerFacility">🛀 샤워시설이 있어요</li>;
            case 3:
              return <li key="restaurant">🍽 식당 카페가 있어요</li>;
            case 4:
              return <li key="parking">🚘 주차장이 있어요</li>;
            case 5:
              return <li key="accommodation">🏨 숙박시설이 있어요</li>;
            default:
              return <li></li>;
          }
        } else {
          return <li></li>;
        }
      })}
    </ul>
  );
};

export default AmentyInfo;

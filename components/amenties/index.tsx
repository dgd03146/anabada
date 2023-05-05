import React from 'react';

type TAmenityProps = {
  amenities: string[];
};

const AmentyInfo = ({ amenities }: TAmenityProps) => {
  return (
    <div>
      {amenities.map((amenity, index) => {
        if (amenity === 'true') {
          switch (index) {
            case 0:
              return <p key="airgun">💨 에어건이 있어요</p>;
            case 1:
              return <p key="surfingShop">🏄 서핑샵이 있어요</p>;
            case 2:
              return <p key="showerFacility">🛀 샤워시설이 있어요</p>;
            case 3:
              return <p key="restaurant">🍽 식당 카페가 있어요</p>;
            case 4:
              return <p key="parking">🚘 주차장이 있어요</p>;
            case 5:
              return <p key="accommodation">🏨 숙박시설이 있어요</p>;
            default:
              return <p></p>;
          }
        } else {
          return <p></p>;
        }
      })}
    </div>
  );
};

export default AmentyInfo;

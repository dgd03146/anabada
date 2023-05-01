import React from 'react';
import { TMeet } from '../../../../lib/types/types';
import Image from 'next/image';
import { Container } from './style';

type TMeetInfoProps = {
  meet?: TMeet;
};

const MeetInfo = ({ meet }: TMeetInfoProps) => {
  return (
    <Container>
      <h2>모집 정보</h2>
      <div className="meetInfo">
        <div>
          <Image
            src={'/assets/icons/info.svg'}
            width={16}
            height={16}
            alt="info svg"
          />
          <p>
            인원 {meet?.currentMember} / {meet?.goalMember}
          </p>
        </div>
        <div>
          <Image
            src={'/assets/icons/date.svg'}
            width={16}
            height={16}
            alt="date svg"
          />
          <p>모임 날짜</p>
          <p>{meet?.meetDate}</p>
        </div>
        <div>
          <Image
            src={'/assets/icons/period.svg'}
            width={16}
            height={16}
            alt="Period svg"
          />
          <p>모집 기간</p>
          <p>~ {meet?.endDate}</p>
        </div>
      </div>
    </Container>
  );
};

export default MeetInfo;

import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { getDifferenceInDays } from '../../../lib/utils/getDiffrenceInDays';
import Image from 'next/image';
import { TMeet } from '../../../lib/types/types';
import { LeftWrapper, MeetContinaer, RightWrapper } from './style';
import { BlurDataURL } from '../../../constants/contstant';

type TMeetProps = {
  meet: TMeet;
};

const Meet = ({ meet }: TMeetProps) => {
  const router = useRouter();

  const time = new Date().toISOString();
  const currentDate = new Date(time.slice(0, 10));

  return (
    <MeetContinaer onClick={() => router.push(`/meets/${meet.thunderPostId}`)}>
      <LeftWrapper>
        <Image
          src={meet.thumbnailUrl}
          alt="Meetimg"
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL={BlurDataURL}
        />
      </LeftWrapper>
      <RightWrapper>
        <div className="dateBox">
          {getDifferenceInDays(currentDate, new Date(meet.endDate)) >= 0 ? (
            <p className="dDay">
              D-
              {getDifferenceInDays(currentDate, new Date(meet.endDate)) === 0
                ? 'Day'
                : getDifferenceInDays(currentDate, new Date(meet.endDate))}
            </p>
          ) : (
            <p className="dayClosing">마감</p>
          )}
          <p className="endDate"></p>
        </div>
        <div className="titleDiv">{meet.title}</div>
        <div className="subBox">
          <Image
            src={'/assets/icons/area.svg'}
            width={16}
            height={16}
            alt="Area"
          />
          <p className="area">{meet.area}</p>
          <p className="address">{meet.address}</p>
        </div>
        <div className="subBox bottom">
          <Image
            src={'/assets/icons/date.svg'}
            width={16}
            height={16}
            alt="Area"
          />
          <p>{meet.meetDate}</p>
        </div>
        <div className="subBox bottom">
          <Image
            src={'/assets/icons/people.svg'}
            width={16}
            height={16}
            alt="Area"
          />
          <p>
            {meet.currentMember} / {meet.goalMember}
          </p>
        </div>
      </RightWrapper>
    </MeetContinaer>
  );
};

export default Meet;

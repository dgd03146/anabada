import React from 'react';
import { TMeet } from '../../../../lib/types/types';
import { MembersContainer } from './style';
import Image from 'next/image';
import { BlurDataURL } from '../../../../constants/contstant';

type TMembersProps = {
  meet: TMeet;
};

export const Members = ({ meet }: TMembersProps) => {
  return (
    <MembersContainer>
      <div className="title">참여 인원 목록</div>
      <div className="memberLists">
        <Image
          src={meet.profileImg}
          alt="profileImg"
          width={50}
          height={50}
          placeholder="blur"
          blurDataURL={BlurDataURL}
        />
        <div>
          <p>{meet.nickname}</p>
          <p className="host">주최자</p>
        </div>
      </div>
      {meet.members.map((member) => (
        <div className="memberLists" key={member.email}>
          <Image
            src={member.profileImg}
            alt="profileImg"
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL={BlurDataURL}
          />
          <div>
            <p>{member.nickname}</p>
            {member.nickname && <p className="participant">참여자</p>}
          </div>
        </div>
      ))}
    </MembersContainer>
  );
};

import React from 'react';
import { TMeet } from '../../../../lib/types/types';
import { MembersContainer } from './style';

type TMembersProps = {
  meet: TMeet;
};

export const Members = ({ meet }: TMembersProps) => {
  return (
    <MembersContainer>
      <div className="title">참여 인원 목록</div>
      <div className="memberLists">
        <img src={meet.profileImg} alt="profileImg" />
        <div>
          <p>{meet.nickname}</p>
          <p className="host">주최자</p>
        </div>
      </div>
      {meet.members.map((member) => (
        <div className="memberLists" key={member.email}>
          <img src={member.profileImg} alt="profileImg" />
          <div>
            <p>{member.nickname}</p>
            {member.nickname && <p className="participant">참여자</p>}
          </div>
        </div>
      ))}
    </MembersContainer>
  );
};

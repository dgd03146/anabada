import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AllBtn, Btn, BtnDiv, SelectDiv } from './style';

type TProps = {
  type: 'posts' | 'meets';
};

const FeedList = ({ type }: TProps) => {
  const router = useRouter();

  const handleBtnClick = (state: string) => {
    router.push({
      pathname: type === 'posts' ? '/my/posts' : '/my/meets',
      query: { state }
    });
  };
  return (
    <SelectDiv>
      <h1>{type === 'posts' ? '피드 리스트' : '오픈 모임 리스트'}</h1>
      <BtnDiv>
        {type === 'posts' && (
          <>
            <Btn onClick={() => handleBtnClick('myWritePost')}>
              <Image
                src="/assets/icons/write.svg"
                alt="My Write"
                width={24}
                height={24}
              />
              <label>작성 피드</label>
            </Btn>
            <Btn onClick={() => handleBtnClick('myLikePost')}>
              <Image
                src="/assets/icons/like.svg"
                alt="My Like"
                width={25}
                height={24}
              />
              <label>좋아요 피드</label>
            </Btn>
          </>
        )}
        {type === 'meets' && (
          <>
            <Btn onClick={() => handleBtnClick('myHostMeet')}>
              <Image
                src="/assets/icons/host.svg"
                width={24}
                height={24}
                alt="Host"
              />
              <label>주최 모임</label>
            </Btn>
            <Btn onClick={() => handleBtnClick('myJoinMeet')}>
              <Image
                src="/assets/icons/join.svg"
                width={24}
                height={24}
                alt="Join"
              />
              <label>참석 모임</label>
            </Btn>
            <Btn onClick={() => handleBtnClick('myLikeMeet')}>
              <Image
                src="/assets/icons/likeMeets.svg"
                width={24}
                height={24}
                alt="likeMeets"
              />
              <label>좋아요 모임</label>
            </Btn>
          </>
        )}
      </BtnDiv>
      <AllBtn
        onClick={() =>
          handleBtnClick(type === 'posts' ? 'myWritePost' : 'myHostMeet')
        }
      >
        <Image src="/assets/icons/all.svg" width={9} height={14} alt="All" />
      </AllBtn>
    </SelectDiv>
  );
};

export default FeedList;

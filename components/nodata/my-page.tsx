import React from 'react';
import { FiInbox } from 'react-icons/fi';
import { NoDataDiv } from './style';

type TNoDataMyPage = {
  text: string;
  meet: boolean;
  post: boolean;
};

export const NoDataMyPage = ({ text, meet, post }: TNoDataMyPage) => {
  let title = '';
  switch (text) {
    case 'myHostMeet':
      title = '주최';
      break;
    case 'myJoinMeet':
      title = '참석';
      break;
    case 'myLikeMeet':
      title = '좋아요';
      break;
    case 'myWritePost':
      title = '작성';
      break;
    case 'myLikePost':
      title = '좋아요';
      break;
    default:
      title = '';
  }

  return (
    <NoDataDiv>
      <div>
        <FiInbox />
        {meet && <p>{`${title} 모임이 없습니다`}</p>}
        {post && <p>{`${title}한 게시글이 없습니다`}</p>}
      </div>
    </NoDataDiv>
  );
};

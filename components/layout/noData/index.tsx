import { FiInbox } from 'react-icons/fi';
import React from 'react';
import { Container } from './style';

type TNoDataProps = {
  text: string;
  content?: string;
  chat?: boolean;
  notification?: boolean;
  meet?: boolean;
  post?: boolean;
};

const NoData = ({
  text,
  content,
  chat,
  notification,
  meet,
  post
}: TNoDataProps) => {
  const titleMap: {
    [key: string]: string;
  } = {
    host: '주최',
    join: '참석',
    like: '좋아요',
    write: '작성'
  };
  const title = titleMap[text] || '';

  return (
    <Container>
      <div>
        <FiInbox />
        {chat ? (
          <p>{`${text}가 없습니다`}</p>
        ) : (
          <>
            {meet ? (
              <p>{`${title} 모임이 없습니다`}</p>
            ) : post ? (
              <p>{`${title}한 게시글이 없습니다`}</p>
            ) : (
              <p>{`${text}이 없습니다`}</p>
            )}
            {!notification && !chat && <p>{`첫 ${content}을 작성해 보세요`}</p>}
          </>
        )}
      </div>
    </Container>
  );
};

export default NoData;

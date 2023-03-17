import styled from 'styled-components';
import { FiInbox } from 'react-icons/fi';
import React from 'react';
import { NoDataDiv } from './style';

type TNoData = {
  text?: string;
  content?: string;
  notification?: boolean;
  chat?: boolean;
};

const NoData = ({ text, content, chat, notification }: TNoData) => {
  return (
    <NoDataDiv>
      <div>
        <FiInbox />
        {chat ? (
          <p>{`${text}가 없습니다`}</p>
        ) : (
          <>
            <p>{`${text}이 없습니다`}</p>
            {!notification && <p>{`첫 ${content}을 작성해 보세요`}</p>}
          </>
        )}
      </div>
    </NoDataDiv>
  );
};

export default NoData;

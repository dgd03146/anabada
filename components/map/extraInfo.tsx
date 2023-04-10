import React from 'react';
import { ExtraInfoContainer } from './style';

type TExtraInfo = {
  title: string;
  content: string;
  value: string;
  measure: string;
};

const ExtraInfo = ({ title, content, value, measure }: TExtraInfo) => {
  return (
    <ExtraInfoContainer>
      <div>
        <span className="material-symbols-outlined">{title}</span>
      </div>
      <div>
        <span>
          {content}
          <span>{value}</span>
          {measure}
        </span>
      </div>
    </ExtraInfoContainer>
  );
};

export default ExtraInfo;

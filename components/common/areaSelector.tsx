import React, { ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

type TAreaSelectorProps = {
  areaSelected: string;
  onChangeArea: (event: ChangeEvent<HTMLSelectElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const AreaSelector = ({
  areaSelected,
  onChangeArea,
  onKeyPress
}: TAreaSelectorProps) => {
  return (
    <CategoryContainer>
      <select id="area" onChange={onChangeArea} value={areaSelected}>
        <option value="ALL">All</option>
        <option value="서울·경기·인천">Seoul·Gyeonggi·Incheon</option>
        <option value="강원">Gangwon</option>
        <option value="대구·경북">Daegu·Gyeongbuk</option>
        <option value="부산·울산·경남">Busan·Ulsan·Gyeongnam</option>
        <option value="전북">Jeonbuk</option>
        <option value="광주·전남">Gwangju·Jeonnam</option>
        <option value="충북">Chungbuk</option>
        <option value="충남">Chungnam</option>
        <option value="제주">Jeju</option>
      </select>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        onKeyPress={onKeyPress}
      />
    </CategoryContainer>
  );
};

export default AreaSelector;

export const CategoryContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  padding: 0.875rem 0;
  select {
    padding: 0.625rem;
    background: #ffffff;
    border: 1px solid #c7c7cc;
    border-radius: 4px;
    height: 40px;
  }

  input {
    font-weight: 400;
    font-size: 0.875rem;
    margin-left: 0.75rem;
    width: 100%;
    padding: 0.625rem 1rem;
    background-color: #f2f2f7;
    border-radius: 0.75rem;
  }
`;

import React, { ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { Categories } from '../categories/categories';
import { CategoryContainer } from './style';

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
        <Categories />
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

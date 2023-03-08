import { ChangeEvent, useState, MouseEvent, FormEvent } from 'react';
import { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import React from 'react';
import { useSpots } from '../../../quries/hooks/spots/useSpots';
import { TMapProps } from '..';
import { Beaches } from '../../../data/beaches';
import {
  SearchForm,
  SearchResultLi,
  SearchResultWrapper,
  SearchWrapper
} from './style';
import { TOutletContext } from '../../../lib/types/types';

const MapSearch = ({ setPicker }: Omit<TMapProps, 'picker'>) => {
  const spots = useSpots();

  const inputRef = useRef(null);
  const [inputName, setInputName] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>();
  const { alertHandler } = useOutletContext() as TOutletContext;

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputName === '') {
      return alertHandler('해변을 입력해주세요!');
    }

    if (!Beaches.includes(inputName)) {
      if (searchResult?.length === 0) {
        return alertHandler('일치하는 해변이 없습니다!');
      }

      const result = spots?.find(
        ({ beachName }) => beachName === searchResult![0]
      );
      setInputName(searchResult![0]);
      setPicker((prev) => ({ ...prev, ...result }));
      setSearchResult([]);
    } else {
      const result = spots?.find((el) => el.beachName === inputName);
      setPicker((prev) => ({ ...prev, ...result }));
      setSearchResult([]);
    }
  };

  const handleClickList = (event: MouseEvent<HTMLLIElement>) => {
    const button = event.target as HTMLLIElement;
    setInputName(button.innerText);
    return setSearchResult([]);
  };

  const searchBeach = (searchValue: string) => {
    setSearchResult([]);
    if (searchValue === '') return;

    const resultArr = Beaches.filter((el: string) =>
      el.startsWith(searchValue)
    );
    return setSearchResult(resultArr);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchBeach(event.target.value);
    return setInputName(event.target.value);
  };

  return (
    <>
      <SearchForm autoComplete="off">
        <SearchWrapper>
          <input
            type="text"
            className="search__input"
            placeholder="해수욕장 이름을 검색해주세요."
            onChange={handleChange}
            ref={inputRef}
            value={inputName}
          ></input>
          <button type="submit" className="search__btn" onClick={handleSubmit}>
            <BsSearch />
          </button>
        </SearchWrapper>
        <SearchResultWrapper>
          {searchResult?.map((el) => (
            <SearchResultLi key={el} onClick={handleClickList}>
              {el}
            </SearchResultLi>
          ))}
        </SearchResultWrapper>
      </SearchForm>
    </>
  );
};

export default MapSearch;

import { ChangeEvent, useState, MouseEvent, FormEvent } from 'react';
import { useRef } from 'react';
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
import { toast } from 'react-toastify';

const MapSearch = ({ setPicker }: Omit<TMapProps, 'picker'>) => {
  const spots = useSpots();

  const inputRef = useRef(null);
  const [inputName, setInputName] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>();

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const selectedBeach = inputName.trim();

    if (!selectedBeach) {
      return toast.warn('Please enter a beach name!');
    }

    const beachMatch = spots?.find((spot) => spot.beachName === selectedBeach);

    if (!beachMatch) {
      const firstMatch = searchResult?.[0];
      if (!firstMatch) {
        return toast.error('No matching beaches found!');
      }

      setPicker((prev) => ({
        ...prev,
        ...spots?.find((spot) => spot.beachName === firstMatch)
      }));
      setInputName(firstMatch);
    } else {
      setPicker((prev) => ({ ...prev, ...beachMatch }));
    }

    setSearchResult([]);
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

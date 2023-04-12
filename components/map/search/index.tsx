import { ChangeEvent, useState, MouseEvent, FormEvent } from 'react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import React from 'react';
import { TMapProps } from '..';
import { Beaches } from '../../../data/beaches';
import {
  SearchForm,
  SearchResultLi,
  SearchResultWrapper,
  SearchWrapper
} from './style';
import { toast } from 'react-toastify';
import { showToast } from '../../layout/Toast/style';
import { BEACH_MESSAGE } from '../../../constants/contstant';

const MapSearch = ({ setPicker, spots }: Omit<TMapProps, 'picker'>) => {
  const inputRef = useRef(null);
  const [inputName, setInputName] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>();

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const selectedBeach = inputName.trim();

    if (!selectedBeach) {
      return showToast({
        type: 'success',
        message: BEACH_MESSAGE.BEACH_CHECK_MESSAGE
      });
    }

    const beachMatch = spots?.find((spot) => spot.beachName === selectedBeach);

    if (!beachMatch) {
      const firstMatch = searchResult?.[0];
      if (!firstMatch) {
        return showToast({
          type: 'success',
          message: BEACH_MESSAGE.BEACH_ERROR_MESSAGE
        });
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

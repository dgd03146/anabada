import React from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import { TMeet } from '../../../lib/types/types';
import Image from 'next/image';
import { BlurDataURL } from '../../../constants/contstant';
import { getDifferenceInDays } from '../../../lib/utils/getDiffrenceInDays';

type TPopularMeetsProps = {
  popularMeets?: TMeet[];
};

const PopularMeets = ({ popularMeets }: TPopularMeetsProps) => {
  const router = useRouter();
  const time = new Date().toISOString();
  const currentDate = new Date(time.slice(0, 10));

  return (
    <PopularPostsContainer>
      <h2>인기모임🔥</h2>
      <div className="meetsBox">
        {popularMeets?.map((meet) => (
          <div
            className="meetBox"
            key={meet.thunderPostId}
            onClick={() => router.push(`/meets/${meet.thunderPostId}`)}
          >
            <div className="meetImageWrapper">
              <Image
                src={meet.thumbnailUrl}
                alt="thumbnail"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={BlurDataURL}
              />
            </div>
            <div className="infoBox">
              <div className="dateBox">
                {getDifferenceInDays(currentDate, new Date(meet.endDate)) >=
                0 ? (
                  <p className="dDay">
                    D-
                    {getDifferenceInDays(
                      currentDate,
                      new Date(meet.endDate)
                    ) === 0
                      ? 'Day'
                      : getDifferenceInDays(
                          currentDate,
                          new Date(meet.endDate)
                        )}
                  </p>
                ) : (
                  <p className="dayClosing">마감</p>
                )}
                <p className="endDate"></p>
              </div>
              <div className="title">{meet.title}</div>
              <div className="areaInfo">
                <Image
                  src={'/assets/icons/area.svg'}
                  width={16}
                  height={16}
                  alt="Area"
                />
                <p>{meet.area}</p>
              </div>
              <div className="subBox bottom">
                <Image
                  src={'/assets/icons/date.svg'}
                  width={16}
                  height={16}
                  alt="Area"
                />
                <p>{meet.meetDate}</p>
              </div>
              <div className="subBox">
                <Image
                  src={'/assets/icons/people.svg'}
                  width={16}
                  height={16}
                  alt="Area"
                />
                <p>
                  {meet.currentMember} / {meet.goalMember}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PopularPostsContainer>
  );
};

const PopularPostsContainer = styled.div`
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.313rem;
    line-height: 143.84%;
    /* or 30px */
    margin: 0;
    color: #000000;
    margin-bottom: 0.625rem;
  }
  div.meetsBox {
    display: flex;
  }

  div.meetBox {
    min-width: 14.375rem;
    max-height: 21.5rem;
    margin-right: 1rem;
    border-radius: 13px;

    cursor: pointer;
    &:hover {
      background: #f7faff;
    }
  }
  div.meetImageWrapper {
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 13px;
    position: relative;

    img {
      width: 100%;
      height: 11.875rem;
      object-fit: cover;

      border-radius: 13px;
    }
  }
  div.infoBox {
    bottom: 2rem;
    display: flex;
    position: relative;

    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 0.5rem;
    cursor: pointer;
    /* width: 198px;
    height: 135px; */

    background: #ffffff;
    /* default */

    box-shadow: 1px 1px 8px rgba(198, 198, 198, 0.42);
    border-radius: 13px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    width: 100%;
  }
  .title {
    width: 100%;
    display: block;
    display: -webkit-box;

    -webkit-line-clamp: 2; //원하는 라인수
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 600;
    font-size: 0.9rem;
  }

  .dDay {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.125rem 0.25rem;
    gap: 0.625rem;
    margin-right: 0.75rem;

    background: #ff3b30;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 143.84%;
    /* or 17px */

    color: #ffffff;
  }
  .dayClosing {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.125rem 0.25rem;
    gap: 0.625rem;
    margin-right: 0.75rem;

    /* width: 35px; */
    /* height: 21px; */

    background: black;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 143.84%;
    /* or 17px */

    color: #ffffff;
  }
  .endDate {
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 143.84%;

    /* or 17px */

    color: #000000;
  }

  div.dateBox {
    display: flex;
    align-items: center;
  }
  div.areaInfo {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    color: #8e8e93;
    svg {
      margin-right: 0.5rem;
    }
  }
  div.subBox {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    color: #8e8e93;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export default PopularMeets;

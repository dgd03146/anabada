import styled from 'styled-components';

export const MembersContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.25rem;
  padding: 0 1rem;
  p.title {
    font-size: 1rem;
    padding-top: 0.75rem;
  }
  div.memberLists {
    display: flex;
    flex-direction: row;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  p {
    font-size: 0.9rem;
    font-weight: 400;
    text-align: left;
  }
  p.host {
    font-size: 0.7rem;
    font-weight: 300;
    color: #007aff;
  }
  p.participant {
    font-weight: 300;
    font-size: 0.7rem;
  }
`;

import styled from 'styled-components';

export const NotificationContainer = styled.div`
  width: 100%;
  height: 3.8125rem;
  margin-bottom: 0.625rem;

  padding: 0.625rem 0.8125rem;

  box-shadow: 1px 1px 8px rgba(198, 198, 198, 0.42);
  border-radius: 6px;
  cursor: pointer;
`;

export const NotificationBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const NotificationType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  padding-bottom: 1rem;
`;
export const NotificationInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  display: block; /* 블록태그로 만들어준다 */
  overflow: hidden;
  * > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const NotifiactionPerson = styled.div<{ isRead: boolean }>`
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  width: 100%;
  color: ${(props) => (props.isRead ? '#8e8e93' : 'black')};
`;

export const NotificationTitle = styled.div`
  font-weight: 500;
  font-size: 0.85rem;
  color: #8e8e93;
  width: 100%;
`;

export const NotificationDeleteButton = styled.div``;

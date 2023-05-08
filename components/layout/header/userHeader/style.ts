import styled from 'styled-components';

type TNotifcationProps = {
  noti: boolean;
};

export const NotificationContainer = styled.div<TNotifcationProps>`
  position: relative;
  .notification__red {
    width: 0.4rem;
    height: 0.4rem;
    z-index: 999;
    background-color: ${(props) => (props.noti ? 'inherit' : 'red')};
    position: absolute;
    border-radius: 50px;
    bottom: 0;
    right: 0;
  }
`;

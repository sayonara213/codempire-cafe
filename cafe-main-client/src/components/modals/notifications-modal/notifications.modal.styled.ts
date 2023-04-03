import styled from 'styled-components';

export const NotificationsModalWrap = styled.div``;

export const NotificationsModalBody = styled.div`
  height: 400px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NotificationsModalFooter = styled.div``;

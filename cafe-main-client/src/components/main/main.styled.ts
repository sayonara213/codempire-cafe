import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 242px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    padding: 0 80px;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

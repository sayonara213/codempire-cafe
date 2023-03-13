import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const PlaceholderContainer = styled.div`
  width: 225px;
  height: 391px;

  margin: 0 20px 20px 0;
  padding: 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);

  div {
    background-color: #ededed;
    background-image: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    background-position-x: 180%;
    animation: ${shine} 1s ease-in-out infinite;
  }
`;

export const PlaceholderImage = styled.div`
  width: 100%;
  height: 180px;

  margin-bottom: 16px;
`;

export const PlaceholderTitle = styled.div`
  width: 100%;
  height: 20px;

  margin-bottom: 16px;
`;

export const PlaceholderDescription = styled.div`
  width: 100%;
  height: 30px;

  margin-bottom: 14px;
`;

export const PlaceholderPrice = styled.div`
  width: 100%;
  height: 35px;

  margin-bottom: 16px;
`;

export const PlaceholderButton = styled.div`
  width: 100%;
  height: 50px;
`;

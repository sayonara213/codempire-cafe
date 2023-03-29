import styled from 'styled-components';
import { IMAGES } from './../../../../../constants/images';

export const ProgressBarContainer = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  margin-right: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Point = styled.div<any>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.text};
  background-color: ${({ active, theme }) => (active ? theme.color.text : theme.color.white)};
  position: relative;
  outline: 2px solid ${({ theme }) => theme.color.white};

  &::before {
    content: '';
    background: url(${IMAGES.checkMark}) no-repeat center;
    height: 13px;
    width: 13px;
    display: block;
  }
`;

export const Line = styled.div<any>`
  flex-grow: 1;
  height: 4px;
  border: 1px solid ${({ theme }) => theme.color.text};
  background-color: ${({ active, theme, isCanceled }) =>
    active ? theme.color.text : theme.color.white};
`;

export const PointContainer = styled.div<any>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:last-of-type ${Point} {
    background-color: ${({ theme, isCanceled }) =>
      isCanceled ? theme.color.red : theme.color.white};
    border-color: ${({ theme, isCanceled }) => (isCanceled ? theme.color.red : theme.color.text)};

    &::before {
      display: none;
    }
  }
`;

export const PointText = styled.span`
  position: absolute;
  bottom: -15px;

  display: block;
  width: 55px;
  text-align: center;
  margin-top: 4px;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.footer};
  color: ${({ theme }) => theme.color.text};
`;

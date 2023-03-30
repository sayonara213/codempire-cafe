import React from 'react';
import { OrderStatus } from '../../../../../types/types.order';
import * as Styled from './progress-bar.styled';
interface ProgressBarProps {
  progress: OrderStatus;
}

interface PointWithLineProps {
  point: number;
  text: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const pointStatus = {
    created: 1,
    ready: 2,
    onWay: 3,
    delivered: 4,
    canceled: 4,
  };

  const currentStatus = pointStatus[progress];

  const PointWithLine = ({ point, text }: PointWithLineProps) => (
    <>
      <Styled.PointContainer isCanceled={progress === OrderStatus.CANCELED}>
        <Styled.Point active={point <= currentStatus} />
        <Styled.PointText>{text}</Styled.PointText>
      </Styled.PointContainer>
      {point < 4 && <Styled.Line active={point < currentStatus} />}
    </>
  );

  return (
    <Styled.ProgressBarContainer>
      <PointWithLine point={1} text='Created' />
      <PointWithLine point={2} text='Ready' />
      <PointWithLine point={3} text='On Way' />
      <PointWithLine
        point={4}
        text={progress === OrderStatus.CANCELED ? 'Canceled' : 'Delivered'}
      />
    </Styled.ProgressBarContainer>
  );
};

export default ProgressBar;

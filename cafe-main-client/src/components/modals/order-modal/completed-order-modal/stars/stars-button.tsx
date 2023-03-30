import React, { MouseEventHandler } from 'react';
import { StarButton, StarSpan } from './stars.styled';

interface StarsButtonProps {
  onClick: (index: number) => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
  isPicked: boolean;
  index: number;
}

const StarsButton: React.FC<StarsButtonProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  index,
  isPicked,
}) => {
  const handleClick = () => {
    onClick(index);
  };

  const handleMouseEnter = () => {
    onMouseEnter(index);
  };

  return (
    <StarButton
      onClick={handleClick}
      type={'button'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      isPicked={isPicked}>
      <StarSpan>&#9733;</StarSpan>
    </StarButton>
  );
};

export default StarsButton;

import React, { useState } from 'react';
import * as Styled from './stars.styled';
import StarsButton from './stars-button';

interface StarsProps {
  stars: number;
  setStars: (stars: number) => void;
  canBeChanged?: boolean;
}

const StarsRating: React.FC<StarsProps> = ({ stars, setStars, canBeChanged }) => {
  const [hover, setHover] = useState(0);

  const changeStars = (star: number) => {
    if (canBeChanged) {
      setStars(star);
    }
  };

  const handleHover = (star: number) => {
    if (canBeChanged) {
      setHover(star);
    }
  };

  const handleMouseLeave = () => {
    if (canBeChanged) {
      setHover(0);
    }
  };

  return (
    <Styled.RatingContainer>
      <Styled.RatingSection>
        <Styled.RatingTitle>Rating:</Styled.RatingTitle>
        <Styled.StarsContainer>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <StarsButton
                onClick={changeStars}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                isPicked={index <= (hover || stars) ? true : false}
                index={index}
              />
            );
          })}
        </Styled.StarsContainer>
      </Styled.RatingSection>
      <Styled.RatingSection>
        <Styled.RatingTitle>Status:</Styled.RatingTitle>
        <Styled.RatingText>Delivered</Styled.RatingText>
      </Styled.RatingSection>
    </Styled.RatingContainer>
  );
};

export default StarsRating;

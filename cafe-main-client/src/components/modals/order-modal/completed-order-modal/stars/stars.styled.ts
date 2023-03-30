import styled from 'styled-components';

interface StarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPicked: boolean;
}

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 50%;
`;

export const RatingSection = styled.div`
  margin-right: 30px;

  display: flex;
  flex-direction: column;
`;

export const StarsContainer = styled.div``;

export const StarButton = styled.button<StarButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 2px;

  color: ${({ isPicked, theme }) => (isPicked ? theme.color.text : theme.color.notActive)};
`;

export const StarSpan = styled.span``;

export const RatingTitle = styled.h3`
  margin-bottom: 6px;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const RatingText = styled.p`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

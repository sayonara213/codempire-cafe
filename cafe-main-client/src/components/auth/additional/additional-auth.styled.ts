import styled from 'styled-components';

export const AdditionalWrapper = styled.div`
  margin-bottom: 40px;
`;

export const AdditionalHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.text};
`;

export const AdditionalSubHeading = styled.h3`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from 'styled-components';

export const FiltersContainer = styled.div`
  width: 225px;
  height: 600px;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FiltersHeader = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid ${({ theme }) => theme.color.light};
`;

export const FiltersHeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.dark};

  margin: 0 20px;
`;

export const FiltersHeaderIcon = styled.img``;

export const FiltersCategory = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FiltersCategoryTitle = styled.h3`
  padding: 16px 0;
  width: 100%;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.color.dark};
  border-bottom: 1px solid ${({ theme }) => theme.color.light};
`;

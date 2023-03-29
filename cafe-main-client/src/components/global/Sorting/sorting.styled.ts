import styled from 'styled-components';
import Select from 'react-select';

export const SortingSelect = styled(Select)`
  width: 225px;
  height: 50px;

  font-family: ${({ theme }) => theme.font.medium};

  display: flex;
  align-items: center;
`;

import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  padding: 14px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CheckBoxInput = styled.input`
  appearance: none;

  margin: 0;

  width: 15px;
  height: 15px;

  border: 0.15em solid ${({ theme }) => theme.color.dark};
  border-radius: 0.15em;

  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  transition: 120ms border-color ease-in-out;
  cursor: pointer;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${({ theme }) => theme.color.dark};
  }

  &:checked {
    &::before {
      transform: scale(1);
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.notActive};
  }
`;

export const CheckBoxLabel = styled.label`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.dark};

  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;

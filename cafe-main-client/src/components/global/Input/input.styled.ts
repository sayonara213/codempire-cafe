import styled from 'styled-components';

interface InputWrapProps {
  isFocused: boolean;
}

export const InputWrap = styled.div<InputWrapProps>`
  position: relative;
  width: 100%;
  height: 54px;

  padding: 0 15px 0 15px;
  margin-bottom: 26px;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme, isFocused }) => (isFocused ? theme.color.dark : theme.color.border)};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ isFocused }) => isFocused && `label { transform: translateY(-220%); font-size: 12px;}`}
`;

export const InputField = styled.input`
  all: unset;

  width: 100%;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};

  z-index: 5;

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

export const InputIcon = styled.img`
  width: 20px;

  object-fit: contain;
`;

export const InputPlaceholder = styled.label`
  padding: 0 5px;
  text-align: center;
  background-color: white;

  position: absolute;
  left: 10px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};

  z-index: 3;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;

import styled from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isLight?: boolean;
}

export const InputWrap = styled.div<InputProps>`
  position: relative;
  width: 100%;
  height: 54px;

  padding: 0 15px 0 15px;

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme, isFocused, isLight }) => (isLight ? isFocused ? theme.color.dark : theme.color.border : theme.color.borderDark)};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ isFocused }) => isFocused && `label { transform: translateY(-220%); font-size: 12px;}`}
`;

export const InputField = styled.input<Omit<InputProps, "isFocused">>`
  all: unset;

  width: 100%;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme, isLight }) => isLight ? theme.color.text : theme.color.white};

  z-index: 5;

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

export const InputIcon = styled.img`
  width: 24px;

  object-fit: contain;
`;

export const InputPlaceholder = styled.label<Omit<InputProps, "isFocused">>`
  padding: 0 5px;
  text-align: center;
  background-color: ${({ theme, isLight }) => isLight ? theme.color.white : theme.color.dark};

  position: absolute;
  left: 10px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme, isLight }) => isLight ? theme.color.text : theme.color.white};

  z-index: 3;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;

import styled from 'styled-components';

export const OrderModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OrderModalBody = styled.div``;

export const FooterButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const OrderSection = styled.div`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OrderSectionTitle = styled.p`
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};
`;

export const RadioListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};

  &:first-of-type {
    margin-bottom: 12px;
  }
`;

export const RadioInput = styled.input`
  appearance: none;

  width: 20px;
  height: 20px;

  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em black;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;

  padding: 16px;
  box-sizing: border-box;
  outline: none;
  resize: none;

  &:placeholder {
    color: ${({ theme }) => theme.color.light};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DateInputWrap = styled.div`
  width: 100%;
`;

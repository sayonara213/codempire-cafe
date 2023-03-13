import styled from 'styled-components';

export const MenuEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BackButton = styled.button`
  width: 70px;
  margin: 24px 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};

  &::before {
    content: '<';
    margin-right: 10px;
  }
`;

export const MenuEditForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputsWrap = styled.div`
  margin: 24px 0;

  display: flex;
  flex-direction: row;
`;

export const MenuEditFormLeft = styled.div`
  margin-right: 24px;
  width: 25%;
`;

export const MenuEditFormRight = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MenuEditImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ImageInputLabel = styled.label`
  display: block;
  margin-top: 10px;
  width: 100%;

  color: ${({ theme }) => theme.color.purple};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const InputWrap = styled.div`
  margin-bottom: 24px;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  :first-child {
    width: 100%;
  }
  :nth-child(2) {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const FlexContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  gap: 20px;
`;

export const ButtonsWrap = styled.div`
  margin: 0 auto;
  width: 50%;

  display: flex;
  flex-direction: row;

  gap: 30px;
`;

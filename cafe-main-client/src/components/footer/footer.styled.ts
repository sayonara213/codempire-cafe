import styled from 'styled-components';

export const FooterWrap = styled.footer`
  position: absolute;

  width: 100%;
  height: 100px;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 308px;
  height: 56px;

  border-radius: 50px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.dark};

  display: flex;
  justify-content: space-around;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  box-shadow: 0px 4px 5px 0px rgba(123, 97, 255, 0.25);
`;

export const FooterContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.borderDark};
  }
`;

export const FooterIcon = styled.img`
  width: 18px;
  object-fit: contain;
  margin-bottom: 5px;
`;

export const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.fontSize.footer};
  font-family: ${({ theme }) => theme.font.light};
`;

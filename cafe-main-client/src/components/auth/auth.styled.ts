import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);

  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrap = styled.form`
  width: 306px;

  display: flex;
  flex-direction: column;
`;

export const AuthTitleWrap = styled.div`
  width: 100%;

  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Logo = styled.img`
  width: 180px;

  object-fit: contain;
`;

export const AuthAdditionalWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;
export const AuthAdditional = styled(Link)`
  text-decoration: none;
  margin-bottom: 80px;

  font-family: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const SkipAuth = styled.a`
  letter-spacing: 1.25px;
  width: 100%;

  margin-top: 20px;

  text-align: center;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const AuthInputWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

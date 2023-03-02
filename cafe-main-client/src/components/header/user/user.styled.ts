import styled from "styled-components";
import { theme } from './../../global/theme';

export const UserWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const UserImageWrap = styled.div``
export const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
`

export const UserTextWrap = styled.div`
    margin-right: 16px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`

export const UserName = styled.p`
    color: ${({ theme }) => theme.color.light};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-family: ${({ theme }) => theme.font.regular};
`
export const UserRole = styled.p`
margin-bottom: 4px;

    color: ${({ theme }) => theme.color.light};
    font-size: ${({ theme }) => theme.fontSize.footer};
    font-family: ${({ theme }) => theme.font.light};
`


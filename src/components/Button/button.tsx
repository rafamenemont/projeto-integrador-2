import React from "react"
import styled from "styled-components"

interface IButtonProps {
    text: string,
    active?: boolean,
    children?: JSX.Element
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const TButton: React.FC<IButtonProps> = ({ text, active, onClick, children }) => {
    return (
        <TransparentButton className={active ? "active" : ""} onClick={onClick}>{children}{text}</TransparentButton>
    )
}

export const SButton: React.FC<IButtonProps> = ({ text, active, onClick, children }) => {
    return (
        <SolidButton className={active ? "active" : ""} onClick={onClick}>{children}{text}</SolidButton>
    )
}

const TransparentButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    position: relative;
    min-width: 136px;
    height: 46px;
    padding: 0 20px;
    border-radius: 16px/16px;
    font-family: ${({ theme }) => theme.fontTheme};
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 700;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
    background: ${({ theme }) => theme.buttonTransparent};
    color: ${({ theme }) => theme.buttonTransparentText};
    border: 2px solid ${({ theme }) => theme.buttonTransparentBorder};
    cursor: pointer;
    flex-wrap: nowrap;

    &:hover {
        background: ${({ theme }) => theme.buttonTransparentHover};
        border: 2px solid ${({ theme }) => theme.buttonTransparentHover};
    }

    &.active {
        background: ${({ theme }) => theme.buttonTransparentHover};
        border: 2px solid ${({ theme }) => theme.buttonTransparentHover};
    }
    
    @media (max-width: 768px) {
        width: 130px;
        height: 46px;
        font-size: 12px;
    }
`

const SolidButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: relative;

    min-width: 136px;
    height: 46px;
    padding: 0 20px;
    border-radius: 16px/16px;
    font-family: ${({ theme }) => theme.fontTheme};
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 700;
    -webkit-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
    background: ${({ theme }) => theme.buttonSolid};
    color: ${({ theme }) => theme.buttonSolidText};
    border: 2px solid ${({ theme }) => theme.buttonSolidBorder};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.buttonSolidHover};
        border: 2px solid ${({ theme }) => theme.buttonSolidHover};
    }

    &.active {
        background: ${({ theme }) => theme.buttonSolidHover};
        border: 2px solid ${({ theme }) => theme.buttonSolidHover};
    }
    
    @media (max-width: 768px) {
        width: 130px;
        height: 46px;
        font-size: 12px;
    }
`
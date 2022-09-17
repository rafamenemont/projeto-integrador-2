import React from "react"
import styled from "styled-components"

interface IButtonProps {
    format: string,
    text: string,
    children?: JSX.Element
}

export const Button: React.FC<IButtonProps> = ({ format, text, children }) => {
    return (
        format === "transparent" ? <TransparentButton>{children}{text}</TransparentButton> : <SolidButton>{children}{text}</SolidButton>
    )
}

const TransparentButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    position: relative;
    width: 136px;
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

    &:hover {
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

    width: 166px;
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
    
    @media (max-width: 768px) {
        width: 130px;
        height: 46px;
        font-size: 12px;
    }
`
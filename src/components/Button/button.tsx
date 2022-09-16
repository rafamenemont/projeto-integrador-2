import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"


export const Button: React.FC<{
    format: string,
    text: string
}> = ({ format, text }) => {
    return (
        format == "transparent" ? <TransparentButton>{text}</TransparentButton> : <SolidButton>{text}</SolidButton>
    )
}

const TransparentButton = styled.button`
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
`

const SolidButton = styled.button`
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
`
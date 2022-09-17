import React from "react"
import styled from "styled-components"


export const Button: React.FC<{
    text: string
    format: string
}> = ({ text, format }) => {
    return (
        format === "transparent" ? <TransparentButton>{text}</TransparentButton> : <SolidButton>{text}</SolidButton>
    )
}

const TransparentButton = styled.button`
    width: 150px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fontTheme};
    color: ${({ theme }) => theme.toggleBorder};
    
    background: transparent;
    border: 2px solid  ${({ theme }) => theme.toggleBorder};
    border-radius: 10px;

    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.darkerBlack};
        background: ${({ theme }) => theme.toggleBorder};
        border: 2px solid  ${({ theme }) => theme.toggleBorder};
    }

`

const SolidButton = styled.button`
    width: 300px;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.fontTheme};

    border: 2px solid  ${({ theme }) => theme.darkerBlack};

    &:hover {
        background: ${({ theme }) => theme.darkerBlack};
    }
`
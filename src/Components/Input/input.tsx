import React, { InputHTMLAttributes, MutableRefObject } from "react";
import styled from "styled-components";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const Input: React.FC<IInput> = ({ label, ...rest }) => {
    return (
        <GroupInp>
            <label>{label}</label>
            <InputWrapper {...rest} />
        </GroupInp>
    )
}

const InputWrapper = styled.input`
    width: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.darkerBlack};
    font-size: 16px;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
`

export const GroupInp = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 47.5%;
    gap: 10px;
    padding-bottom: 10px;

    > label {
        font-weight: 600;
        font-size: 14px;
    }

    @media only screen and (max-width: 768px) {
        flex-basis: 100%;
    }
`
import React from 'react'
import styled from 'styled-components';

interface Props {
    name: string;
    type?: "submit" | "button";
}

function ButtonForm(props: Props) {
    return (
        <ButtonLogin type={props.type}>{props.name}</ButtonLogin>
    )
}

export default ButtonForm

const ButtonLogin = styled.button`
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    width: 80%;
    align-self: center;
    padding: 5px 0;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
    transition: 0.4s;
    color: #418AFB;
    background-color: #fff;
    border: 1px solid #418AFB;

  &:hover{
    color: white;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
    background-color: #418AFB;
  }
`

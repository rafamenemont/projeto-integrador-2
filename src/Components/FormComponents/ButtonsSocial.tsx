import React from 'react'
import styled from 'styled-components';

interface Props {
    name: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    backgroundColor: string;
  }

function ButtonsSocial(props:Props) {
  return (
    <Button onClick={props.onClick} Color={props.backgroundColor}>{props.name}</Button>
  )
}

export default ButtonsSocial

const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-size: 16px;
  color: #fff;  
  cursor: pointer;
  background-color: ${(props: { Color: any}) => props.Color};
`
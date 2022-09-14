import React from 'react'
import styled from 'styled-components';

interface Props {
  labelName: string;
  onChange: any;
  place: string;
  type: string;
  value: string;
  error?: string;
}

function Input({labelName, onChange, place, type, value, error="" }: Props) {
  return (
    <InputContainer>
      <label htmlFor={labelName}>
        {labelName}
      </label>
      <input
        defaultValue={value}
        name={labelName}
        type={type}
        onChange={onChange}
        id={labelName}
        placeholder={place}
      />
      {error && <span>{error}</span>}
    </InputContainer>
  )
}


const InputContainer = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  label{
    
    font-weight: 500;
    font-size: 15px;
    color: #ddd;
    align-self: flex-start;
  }
  input{
    height: 30px;
    width: 100%;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    border-bottom: 1px solid #418AFB;
    background-color: transparent;
    padding: 20px 0;
  }

  input:focus{
    outline: none;
  }

  input::placeholder{
    font-size: 15px;
  }
`

export default Input
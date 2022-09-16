import React from 'react'
import styled from 'styled-components';

interface Props {
  labelName: string;
  onChange: any;
  place: string;
  type: string;
  value: string;
  error?: string;
  id:string;
}

function Input({ id,labelName, onChange, place, type, value, error = "" }: Props) {
  return (
    <InputContainer>
      <div>
        <label htmlFor={labelName}>
          {labelName}
        </label>
        {error && <span>{error}</span>}
      </div>
      <input
        autoComplete='off'
        defaultValue={value}
        name={id}
        type={type}
        onChange={onChange}
        id={id}
        placeholder={place}
      />
    </InputContainer>
  )
}


const InputContainer = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #FFA500;
    font-size: 15px;
  }
  
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
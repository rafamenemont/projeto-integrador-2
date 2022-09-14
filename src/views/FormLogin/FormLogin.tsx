import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import styled from 'styled-components'
import { useFormik } from "formik";
import {useState} from 'react'

import Input from '../../Components/FormComponents/Input'
import ButtonsSocial from "../../Components/FormComponents/ButtonsSocial";
import Button from "../../Components/FormComponents/Button";
import { loginSchema } from "../../Schema/login";

function FormLogin() {

    const [error, setError] = useState(false)

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema:loginSchema,
        onSubmit: values => {
            console.log(values)
        }
    })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setError(true)
        handleSubmit(e)
    }

    return (
        <ContainerForm>
            <ContainerLogin onSubmit={onSubmit}>
                <h1><span>W</span>elcome</h1>
                <Container>
                    <Input
                        type='text'
                        labelName='Email'
                        onChange={handleChange}
                        place='Type Your Email'
                        value={values.email}
                        error={error ? errors.email : ''}
                    />

                    <Input
                        type='password'
                        labelName='Password'
                        onChange={handleChange}
                        place='Type Your Password'
                        value={values.password}
                        error={error ? errors.password : ''}
                    />
                    <p>Forgot Password?</p>
                    <Button type="submit" name='Login' />
                </Container>
                <p>Or Login Using</p>
                <ContainerSocial>
                    <ButtonsSocial
                        onclick={undefined}
                        backgroundColor='#3b5998'
                        name={<FaFacebookF />}
                    />
                    <ButtonsSocial
                        onclick={undefined}
                        backgroundColor='#000'
                        name={<FaGithub />}
                    />
                    <ButtonsSocial
                        onclick={undefined}
                        backgroundColor='#EA4335'
                        name={<FaGoogle />} />
                </ContainerSocial>
                <ContaierSign>
                    <p>Don't have an account?</p>
                    <p>Sign Up</p>
                </ContaierSign>
            </ContainerLogin>
        </ContainerForm>
    )
}

export default FormLogin

const ContaierSign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 15px;
    margin-top: 20px;
`

const ContainerSocial = styled.div`
    width: 100% ;
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 20px;
    

`

const Container = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      p{
        align-self: flex-end;
        font-size: 12px;
      }
`

const ContainerLogin = styled.form`  
    min-height: 85%;
    min-width: 30%;
    background: ${({ theme }) => theme.bodyComponent};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    gap: 20px;
    border-radius: 10px;
    padding: 40px;

    h1{
        justify-self: flex-start;
        font-size: 30px;
        font-weight: 900;
        color: #40A8C4;
        
        span{
            color: #fff;
        }  

    }
`


export const ContainerForm = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`




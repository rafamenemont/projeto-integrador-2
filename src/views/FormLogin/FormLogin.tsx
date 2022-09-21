import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import styled from 'styled-components'
import { useFormik } from "formik";
import { useState } from 'react'

import Input from '../../Components/FormComponents/Input'
import ButtonsSocial from "../../Components/FormComponents/ButtonsSocial";
import ButtonForm from "../../Components/FormComponents/ButtonForm";
import { loginSchema } from "../../Schema/login";
import { Link, useNavigate } from "react-router-dom";
import AuthUtils from "../../util/auth-utils";

function FormLogin() {

    const [showErros, setshowErros] = useState(false)
    const navigate = useNavigate();

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
        redirectToPath()
        handleSubmit(e)
    }

    const redirectToPath = () => {
        const redirectPath = AuthUtils.getMainPath();
        navigate(redirectPath);
    };

    return (
        <ContainerForm>
            <ContainerLogin onSubmit={onSubmit}>
                <h1><span>W</span>elcome</h1>
                <Container>
                    <Input
                        type='text'
                        labelName='Email'
                        id="email"
                        onChange={handleChange}
                        place='Type Your Email'
                        value={values.email}
                        error={showErros ? errors.email : ''}
                    />

                    <Input
                        type='password'
                        labelName='Password'
                        id="password"
                        onChange={handleChange}
                        place='Type Your Password'
                        value={values.password}
                        error={showErros ? errors.password : ''}
                    />
                    <Link to="/">Forgot Password?</Link>
                    <ButtonForm type="submit" name='Login' />
                </Container>
                <p>Or Login Using</p>
                <ContainerSocial>
                    <ButtonsSocial
                        backgroundColor='#3b5998'
                        name={<FaFacebookF />}
                    />
                    <ButtonsSocial
                        backgroundColor='#000'
                        name={<FaGithub />}
                    />
                    <ButtonsSocial
                        backgroundColor='#EA4335'
                        name={<FaGoogle />} />
                </ContainerSocial>
                <ContaierSign>
                    <p>Don't have an account?</p>
                    <Link to='/Signup'>Sign Up</Link>
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

    a{
        text-decoration: none;
        color: #40A8C4;
        font-weight: 600;
    }
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

      a{
        text-decoration: none;
        color: #fff;
        align-self: flex-end;
        font-size: 12px;
      }
`

const ContainerLogin = styled.form`  
    min-height: 80%;
    min-width: 30%;
    background: ${({ theme }) => theme.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    gap: 20px;
    border-radius: 10px;
    padding: 20px;

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




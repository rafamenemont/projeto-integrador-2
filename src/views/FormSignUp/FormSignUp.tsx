import { ContainerForm } from "../FormLogin/FormLogin"
import Input from "../../Components/FormComponents/Input"
import ButtonForm from "../../Components/FormComponents/ButtonForm"
import { signupSchema } from "../../Schema/signup"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import { Fetch } from "../../modules/fetch";

interface INewUser {
  "name": string;
  "nickname": string;
  "email": string;
  "password": string;
  "c_password": string;
  "avatar_id": string;
}

function FormSignUp() {
  const [showErros, setshowErros] = useState(false)
  const [message, setMessage] = useState('')

  useEffect (()=>{
    if(message !== '' ){
      toast.success(message)
    }
  }, [message])

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nickname: '',
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit : async values => {
      const fetchClass = new Fetch<INewUser>("Users/signup.php");
      const body = {
        "name": values.fullname,
        "nickname": values.nickname,
        "email": values.email,
        "password": values.password,
        "c_password": values.confirmPassword,
        "avatar_id": "4"
      }
      const resp = await fetchClass.post(body)
      console.log(resp.data)
      console.log(resp.status)
    }
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setshowErros(true)
    handleSubmit(e)
  }

  return (
    <ContainerForm>
      <ContainerSignUp onSubmit={onSubmit}>
        <h1>Crie a sua conta</h1>
        <Container>
          <ToastContainer position="top-center" theme="dark" autoClose={3000} hideProgressBar={true}/>
          <Input
            labelName="Nickname"
            id="nickname"
            type="text"
            onChange={handleChange}
            place='Digite o seu Nickname'
            value={values.nickname}
            error={showErros ? errors.nickname : ''}
          />
          <Input
            labelName="Nome Completo"
            id="fullname"
            type="text"
            onChange={handleChange}
            place="Digite seu nome completo"
            value={values.fullname}
            error={showErros ? errors.fullname : ''}
          />
          <Input
            labelName="Email"
            id="email"
            type="text"
            onChange={handleChange}
            place="Digite seu Email"
            value={values.email}
            error={showErros ? errors.email : ''}
          />
          <Input
            labelName="Senha"
            type="password"
            id="password"
            onChange={handleChange}
            place="Digite sua senha"
            value={values.password}
            error={showErros ? errors.password : ''}
          />
          <Input
            labelName="Confirme sua senha"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            place="Confirme sua senha"
            value={values.confirmPassword}
            error={showErros ? errors.confirmPassword : ''}
          />
        </Container>
        <ButtonForm type="submit" name="Sign Up" />
        <LoginContainer>
          <p>Já tem sua conta?</p>
          <Link to="/Login">Login</Link>
        </LoginContainer>
      </ContainerSignUp>
    </ContainerForm>
  )
}

export default FormSignUp


const LoginContainer = styled.div`
min-width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;

a{
  text-decoration: none;
  color: #40A8C4;
  font-weight: 600;
}
`

const Container = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-top: 20px;
`

const ContainerSignUp = styled.form`
    min-height: 90%;
    min-width: 50%;
    background: ${({ theme }) => theme.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    gap: 20px;
    border-radius: 10px;
    padding: 20px;

    h1{
      text-align: center;
      justify-self: flex-start;
      font-size: 24px;
      font-weight: 100;
      color: #40A8C4;
    }
`


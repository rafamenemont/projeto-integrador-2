import styled from "styled-components"

import { ContainerForm } from "../FormLogin/FormLogin"
import Input from "../../Components/FormComponents/Input"
import ButtonForm from "../../Components/FormComponents/ButtonForm"
import { signupSchema } from "../../Schema/signup"
import { useState } from "react"
import { useFormik } from "formik"
import { Link } from "react-router-dom"

function FormSignUp() {
  const [showErros, setshowErros] = useState(false)

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email:'',
      fullname: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setshowErros(true)
    handleSubmit(e)
  }

  return (
    <ContainerForm>
      <ContainerSignUp onSubmit={onSubmit}>
        <h1>Create Your Account</h1>
        <Container>
          <Input
            labelName="Full Name"
            id="fullname"
            type="text"
            onChange={handleChange}
            place="Type Your Full Name"
            value={values.fullname}
            error={showErros ? errors.fullname : ''}
          />
          <Input
            labelName="Email"
            id="email"
            type="text"
            onChange={handleChange}
            place="Type Your Email"
            value={values.email}
            error={showErros ? errors.email : ''}
          />
          <Input
            labelName="Password"
            type="password"
            id="password"
            onChange={handleChange}
            place="Type Your Password"
            value={values.password}
            error={showErros ? errors.password : ''}
          />
          <Input
            labelName="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            place="Confirm Your Password"
            value={values.confirmPassword}
            error={showErros ? errors.confirmPassword : ''}
          />
        </Container>
        <ButtonForm type="submit" name="Sign Up" />
        <LoginContainer>
          <p>Already have a account?</p>
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
    min-height: 80%;
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


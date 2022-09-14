import styled from "styled-components"

import { ContainerForm } from "../FormLogin/FormLogin"
import Input from "../../Components/FormComponents/Input"

function FormSignUp() {
  return (
    <ContainerForm>
      <ContainerSignUp>
        <h1>Create Your Account</h1>
        <Container>
          <Input
            labelName="Full Name"
            type="text"
            onChange={undefined}
            place="Type Your Full Name"
            value=""
            error=''
          />
          <Input
            labelName="Email"
            type="text"
            onChange={undefined}
            place="Type Your Email"
            value=""
            error=''
          />
          <Input
            labelName="Password"
            type="text"
            onChange={undefined}
            place="Type Your Password"
            value=""
            error=''
          />
          <Input
            labelName="Confirm Password"
            type="text"
            onChange={undefined}
            place="Confirm Your Password"
            value=""
            error=''
          />
        </Container>
      </ContainerSignUp>
    </ContainerForm>
  )
}

export default FormSignUp

const Container = styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
`

const ContainerSignUp = styled.div`
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
      font-size: 24px;
      font-weight: 100;
      color: #40A8C4;
    }
`


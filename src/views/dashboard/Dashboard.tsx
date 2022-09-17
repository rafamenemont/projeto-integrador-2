import styled from "styled-components";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";

const Dashboard = () => {

  const balance = 5000

  return (
    <>
      <MenuAndHeader>
        <StyledTablesContainer>
          <SuperiorMenu>
            <HelloTitle>
              Olá Usuario,
            <h2>Bem vindo👋</h2>
            </HelloTitle>
          </SuperiorMenu>
      <Container>
        Saldo
      <BalanceTitle>R$ {balance.toLocaleString('pt-br')}
      <div> ,00</div>
        </BalanceTitle>
      </Container>
        </StyledTablesContainer>
      </MenuAndHeader>
    </>
  );
};

const StyledTablesContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 930px;
  padding: 0 70px 40px;
  margin: 0 auto;
`;

const HelloTitle = styled.div`
  font-size: 18px;
  line-height: 1.33333;
`;

const BalanceTitle = styled.div`
  font-size: 70px;
  line-height: 1.22222;
  color: ${({ theme }) => theme.purple};
  display: flex;
  flex-direction: row;
  div {
    font-size: 32px;
    align-self: flex-end;
  }
`;


const SuperiorMenu = styled.div`
  width: 100%;
  margin: 0 -16px;
  display: flex;
  padding: 40px 0;
`;

const Container = styled.div`
  padding: 32px;
  height: 380px;
  margin: auto;
  border-radius: 24px;
  background: ${({ theme }) => theme.black};
  flex: 50%;
  width: 50%;
  margin: 0 16px;
  font-size: 18px;
  line-height: 1.33333;
  font-weight: bold;
`;


export default Dashboard;

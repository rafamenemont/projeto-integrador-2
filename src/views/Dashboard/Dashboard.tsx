import styled from "styled-components";
import { SButton } from "../../components/Button/button";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";
import { MdOutlineAttachMoney } from 'react-icons/md';
import { useState } from "react";
import { ModalAlterPay, ModalNewPay } from "./Modal";



const Dashboard = () => {

  const balance = 5000
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayEditModal, setDisplayEditModal] = useState<boolean>(false);


  var heading = ['Data', 'Valor', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'];
  var body =
      [
        ['22/07', 'R$ 19,50', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
        ['22/07', 'R$ 19,50', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
        ['22/07', 'R$ 19,50', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
      ];

      const tableRow  = (row: string[]) => {
        return (
          <StyledRow onClick={() => setDisplayEditModal(true)}>
            {row.map(val => <div>{val}</div>)}
          </StyledRow>
        )
      }

  return (
    <>
    {displayModal && <ModalNewPay onClick={() => setDisplayModal(false)} />}
    {displayEditModal && <ModalAlterPay onClick={() => setDisplayEditModal(false)} />}
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
      <ActionButton><SButton text="Adicionar valor" onClick={() => setDisplayModal(true)} active><IconReceive /></SButton> </ActionButton>

      </Container>
      <ContainerTable>
        <StyledTable>
            <StyledHead>
                    {heading.map(head => <div>{head}</div>)}
            </StyledHead>
            <StyledBody>
                {body.map(row => tableRow(row) )}
            </StyledBody>
        </StyledTable>
      </ContainerTable>
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

const StyledTable = styled.div`
`;

const StyledBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.toggleBorder};
  padding: 13px 0px;
  &:hover {
    background-color: #dddddd7f;
  }
`;


const StyledHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 13px;
  margin-bottom: 20px;
  color: #B2B3BD;
`;

const BalanceTitle = styled.div`
  font-size: 66px;
  line-height: 1.22222;
  color: ${({ theme }) => theme.purple};
  display: flex;
  flex-direction: row;
  min-width: 285px;
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
  margin: auto;
  border-radius: 24px;
  background: ${({ theme }) => theme.black};
  flex: 50%;
  width: 50%;
  margin: 0 16px;
  font-size: 18px;
  line-height: 1.33333;
  font-weight: bold;
  min-width: 380px;
`;

const ContainerTable = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.black};
  width: 100%;
  margin: 25px 0px;
  font-size: 13px;
  line-height: 1.33333;
  min-width: 380px;
  table {
    width: 100%;
  }
  th{
    color: #B2B3BD;
    font-weight: bold;
  }
  tr {
    width: 100%;
    text-align: center;
  }
  thead {
    tr {
      margin-bottom: 25px;
      border: 1px solid #6B8096;
    }
  }
`;

export const IconReceive = styled(MdOutlineAttachMoney)`
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    margin-left: -5px;
`

export const ActionButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0px;
`

export default Dashboard;

import styled from "styled-components";
import { SButton } from "../../components/Button/button";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";
import { MdOutlineAttachMoney } from 'react-icons/md';
import { useState } from "react";
import { ModalNewPay } from "./Modal";



const Dashboard = () => {

  const balance = 5000
  const [displayModal, setDisplayModal] = useState<boolean>(false)


  var heading = ['Data', 'Valor', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'];
  var body =
      [
        ['Data', 'Valor', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
        ['Data', 'Valor', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
        ['Data', 'Valor', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
        ['Data', 'Valor', 'Origem', 'Tipo', 'Endereço', 'Forma de pagamento'],
      ];

      const tableRow  = (row: string[]) => {
        return (
          <tr>
            {row.map(val => <td>{val}</td>)}
          </tr>
        )
      }

  return (
    <>
    {displayModal && <ModalNewPay onClick={() => setDisplayModal(false)} />}
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
        <table>
            <thead>
                <tr>
                    {heading.map(head => <th>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {body.map(row => tableRow(row) )}
            </tbody>
        </table>
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
    margin-bottom: 25px;
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

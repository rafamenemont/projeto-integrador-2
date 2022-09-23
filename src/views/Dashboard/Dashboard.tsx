import styled from "styled-components";
import { SButton } from "../../Components/Button/button";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";
import { MdOutlineAttachMoney } from 'react-icons/md';
import { useEffect, useState, useCallback } from "react";
import { ModalAlterPay, ModalNewPay } from "./Modal";
import { Fetch } from "../../modules/fetch";

interface IData {
  id: string,
  type: string,
  date: string,
  cost: string,
  origin: string,
  description: string,
  adress: string,
  payment: string
}

const Dashboard = () => {
  const [balance, setBalance] = useState<number>(0)
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayEditModal, setDisplayEditModal] = useState<boolean>(false);

  const [list, setList] = useState<Array<string[]>>([])

  var heading = ['ID', 'Tipo', 'Data', 'Valor', 'Origem', 'Descrição', 'Endereço', 'Forma de pagamento'];

  useEffect(() => {
    const loadList = async () => {
      const fetchClass = new Fetch<{}>("Transaction/index.php?id=1")
      const data = await fetchClass.get()
      const newList: Array<string[]> = []

      let newBalance = 0

      for (let i = 0; i < data.length; i++) {
        if (data[i].type == "Gasto") {
          newBalance -= parseInt(data[i].cost.replace("R$", ""))
        } else {
          newBalance += parseInt(data[i].cost.replace("R$", ""))
        }
      }

      data.forEach((item: IData) => newList.push([item.id.toString(), item.type, item.date, item.cost, item.origin, item.origin, item.description, item.adress, item.payment]))

      setList(newList)
      setBalance(newBalance)
    }

    loadList()
  }, [list])

  useCallback(() => {
    setList([])
  }, [displayModal, displayEditModal])

  const tableRow = (row: string[]) => {
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
            <ActionButton><SButton text="Nova transação" onClick={() => setDisplayModal(true)}><IconReceive /></SButton> </ActionButton>

          </Container>
          <ContainerTable>
            <StyledTable>
              <StyledHead>
                {heading.map(head => <div>{head}</div>)}
              </StyledHead>
              <StyledBody>
                {list.map(row => tableRow(row))}
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

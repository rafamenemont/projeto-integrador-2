import styled from "styled-components";
import { SButton } from "../../Components/Button/button";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";
import { MdOutlineAttachMoney } from 'react-icons/md';
import { useEffect, useState } from "react";
import { ModalAlterPay, ModalNewPay } from "./Modal";
import dayjs from "dayjs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import AvatarImg from '../../assets/avatar-4.png'

export interface IData {
  id?: string,
  type?: string,
  transaction_id?: string,
  date: string,
  cost: number,
  origin: string,
  description: string,
  adress: string,
  payment: string
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Dashboard = () => {
  const [balance, setBalance] = useState<number>(0)
  const [cents, setCents] = useState<string>('00')
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayEditModal, setDisplayEditModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(0);

  const [list, setList] = useState<IData[]>([])
  const [chosenUpdate, setChosenUpdate] = useState<IData>()

  var heading = [ 'Data', 'Valor', 'Origem', 'Descrição', 'Endereço', 'Forma de pagamento'];

  const loadList = async () => {
    const listInStorage = await localStorage.getItem('paymentsList')

    console.log(listInStorage)
  }

  const listInStorage = localStorage.getItem('paymentsList')


  useEffect(() => {
    if(listInStorage){
      let newArray = listInStorage && JSON.parse(listInStorage)
      setList(newArray.sort((a: IData, b: IData) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      }))
      let sum = newArray
      .reduce((previousValue: { cost: number } | number, currentValue: { cost: number; }) => {
        const previus = typeof previousValue === 'number'? previousValue : previousValue.cost;
        return previus + currentValue.cost;
      }, 0)
      .toFixed(2);
      console.log(sum)
      setBalance(sum.split('.')[0].replaceAll(',', ''))
      setCents(sum.split('.')[1])
    } else {
      localStorage.setItem('paymentsList', "[]")
    }
  }, [listInStorage])

  useEffect(() => {
    loadList()
  }, [list])


  const tableRow = (row: IData, id: number) => {
    function handleEditModal() {
      setEditId(id)
      setDisplayEditModal(true)
    }

    return (
      <StyledRow key={`row-${id}`} onClick={() => {
        setChosenUpdate(row)
        handleEditModal()
        }}>
        <div>{dayjs(row.date).format('DD/MM')}</div>
        <div>{row.cost}</div>
        <div>{row.origin}</div>
        <div>{row.description}</div>
        <div>{row.adress}</div>
        <div>{row.payment}</div>
      </StyledRow>
    )
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = list.sort((a: IData, b: IData) => {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  }).map(item => dayjs(item.date).format('DD/MM'));
  const dataSum = list.map((item, index) => {
    let sum: number = list.slice(0, index+1).reduce((previousValue: { cost: number } | number, currentValue: { cost: number; }) => {
      const previus = typeof previousValue === 'number'? previousValue : previousValue.cost;
      return previus + currentValue.cost;
    }, 0)
    return sum
  });

  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: dataSum,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <>
      {displayModal && <ModalNewPay onClick={() => setDisplayModal(false)} />}
      {displayEditModal && chosenUpdate && <ModalAlterPay list={list} chosenUpdate={chosenUpdate} id={editId} onClick={() => setDisplayEditModal(false)} />}
      <MenuAndHeader>
        <StyledTablesContainer>
          <SuperiorMenu>
            <HelloTitle>
              Olá Usuario,
              <h2>Bem vindo👋</h2>
            </HelloTitle>
            <img src={AvatarImg} alt={'burger-menu'} />
          </SuperiorMenu>
          <div style={{display: 'flex'}}>
          <Container>
            Saldo
            <BalanceTitle>R$ {balance.toLocaleString('pt-br')}
              <div> ,{cents}</div>
            </BalanceTitle>
            <ActionButton><SButton text="Nova transação" onClick={() => setDisplayModal(true)}><IconReceive /></SButton> </ActionButton>

          </Container>
          <Container style={{width: 'unset', minWidth: '300px', display: 'flex', alignItems: 'center',
        }}>
          <Line options={options} data={data} />
          </Container>
          </div>
          <ContainerTable>
            <StyledTable>
              <StyledHead>
                {heading.map((head, index) => <div key={`head-${index}`}>{head}</div>)}
              </StyledHead>
              <StyledBody>
                {list.map((row, key) => tableRow(row, key))}
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
  div {
    width: 15%;
  }
`;


const StyledHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 13px;
  margin-bottom: 20px;
  color: #B2B3BD;
  div {
    width: 15%;
  }
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
  justify-content: space-between;
  img {
    height: 60px; 
  }
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

import styled from "styled-components";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";



const Dashboard = () => {

  const balance = 5000

  var heading = ['Name', 'City', 'Course'];
  var body =
      [['Kapil', 'Jaipur', 'MCA'],
      ['Aakash', 'Hisar', 'Btech'],
      ['Mani', 'Ranchi', 'MSc'],
      ['Yash', 'Udaipur', 'Mtech']
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
  margin: auto;
  border-radius: 24px;
  background: ${({ theme }) => theme.black};
  flex: 50%;
  width: 100%;
  margin: 25px 16px;
  font-size: 18px;
  line-height: 1.33333;
  font-weight: bold;
  min-width: 380px;
`;


export default Dashboard;

import styled from "styled-components";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";

const Dashboard = () => {

  return (
    <>
      <MenuAndHeader>
        <StyledTablesContainer>
          <SuperiorMenu>
            <h2>BEM VINDO</h2>
          </SuperiorMenu>
        </StyledTablesContainer>
      </MenuAndHeader>
    </>
  );
};

const StyledTablesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SuperiorMenu = styled.div`
  width: 100%;
  margin: 0 -16px;
  padding: 40px 0;
`;


export default Dashboard;

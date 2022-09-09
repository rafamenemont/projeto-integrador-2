import styled from "styled-components";
import MenuAndHeader from "../menu-and-header/MenuAndHeader";

const Dashboard = () => {

  return (
    <>
      <MenuAndHeader>
        <StyledTablesContainer>
        </StyledTablesContainer>
      </MenuAndHeader>
    </>
  );
};

const StyledTablesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Dashboard;

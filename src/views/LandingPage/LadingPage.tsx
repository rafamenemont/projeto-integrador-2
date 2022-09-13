import styled from "styled-components";

const LandingPage = () => {
    return (
        <ContainerPage>
            <Container>
                👋
            </Container>
        </ContainerPage>
    );
};

const Container = styled.div`
  padding: 32px;
  margin: auto;
  border-radius: 24px;
  background: ${({ theme }) => theme.bodyComponent};
  flex: 50%;
  width: 50%;
  margin: 0 16px;
  font-size: 18px;
  line-height: 1.33333;
  font-weight: bold;
`;

const ContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default LandingPage;

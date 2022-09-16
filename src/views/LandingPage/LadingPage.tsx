import styled from "styled-components";
import { Button } from "../../Components/Button/button";

const LandingPage = () => {
    return (
        <ContainerPage>
            <Navbar>
                <Button text="Entrar" format="transparent"></Button>
            </Navbar>
        </ContainerPage>
    );
};

const ContainerPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    background: ${({ theme }) => theme.background};
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.background};

    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`


export default LandingPage;

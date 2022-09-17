import styled from "styled-components";
import ButtonForm  from "../../Components/FormComponents/ButtonForm";

const LandingPage = () => {
    return (
        <ContainerPage>
            <Navbar>
                <ButtonForm name="Entrar" type="button"></ButtonForm>
            </Navbar>
        </ContainerPage>
    );
};

const ContainerPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    background: ${({ theme }) => theme.darkerBlack};
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.darkerBlack};

    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`


export default LandingPage;

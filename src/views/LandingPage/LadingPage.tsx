import { Button } from "../../components/Button/button";
import { ContainerFooter, ContainerHeader, ContainerList, ContainerPage, Navbar } from "./style";
import LandingPageImg from "../../assets/landing-page.png"
import Logo from "../../assets/logo.png"

const LandingPage = () => {
    return (
        <ContainerPage>
            <Navbar>
                <li>
                    <img src={Logo} />
                    <p>Wallet</p>
                </li>
                <li>
                    <Button text="Cadastrar" format="solid"></Button>
                    <Button text="Entrar" format="transparent"></Button>
                </li>
            </Navbar>
            <ContainerHeader>
                <p>Seu app de gestão financeira</p>
                <h1>Gerencie seus gastos com Wallet, e descomplique sua gestão financeira!</h1>
                <div className="group-button">
                    <Button text="Cadastrar" format="solid"></Button>
                    <Button text="Entrar" format="transparent"></Button>
                </div>
            </ContainerHeader>
            <ContainerList>
                <div className="card">
                    <div className="card-header">
                        <p>01.</p>
                    </div>
                    <div className="card-content">
                        <h2>Criar um cadastro em nosso sistema</h2>
                        <p>Para realizar seu cadastro em nosso sistema é muito simples, basta clicar no botão cadastrar e preencher o formulário. Ah! Não se esqueça de escolher o avatar que é a sua cara.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <p>02.</p>
                    </div>
                    <div className="card-content">
                        <h2>Entrar em sua conta</h2>
                        <p>Depois de se cadastrar você estará pronto para começar a usar nosso sistema de gestão financeira, mas para isso você precisará entrar em sua conta. É só clicar no botão entrar.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <p>03.</p>
                    </div>
                    <div className="card-content">
                        <h2>Começar a usar</h2>
                        <p>Depois de entrar, você verá o mundo financeiro de uma forma como você nunca imaginou. Com um dashboard super intuitivo, basta sair navegando e aproveitar.</p>
                    </div>
                </div>
            </ContainerList>
            <ContainerFooter>
                <img src={LandingPageImg} />
            </ContainerFooter>
        </ContainerPage>
    );
};

export default LandingPage;

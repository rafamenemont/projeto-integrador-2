import { ContainerFooter, ContainerHeader, ContainerList, ContainerPage, IconSignIn, IconSignUp, Navbar } from "./style";
import LandingPageImg from "../../assets/landing-page.png"
import LandingPageImgMobile from "../../assets/landing-page-mobile.png"
import Logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { SButton, TButton } from "../../Components/Button/button";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <ContainerPage>
            <Navbar>
                <li>
                    <img src={Logo} alt='Logo' />
                    <p>Wallet</p>
                </li>
                <li>
                    <SButton text="Cadastrar" onClick={() => navigate('/signUp')} ><IconSignUp /></SButton>
                    <TButton text="Entrar" onClick={() => navigate('/login')}><IconSignIn /></TButton>
                </li>
            </Navbar>
            <ContainerHeader>
                <p>Seu app de gestão financeira</p>
                <h1>Gerencie seus gastos com Wallet, e descomplique sua gestão financeira!</h1>
                <div className="group-button">
                    <SButton text="Cadastrar" onClick={() => navigate('/signUp')} ><IconSignUp /></SButton>
                    <TButton text="Entrar" onClick={() => navigate('/login')}><IconSignIn /></TButton>
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
                        <p>Depois de se cadastrar, você estará pronto para começar a usar nosso sistema de gestão financeira, mas para isso você precisará entrar em sua conta. É só clicar no botão entrar.</p>
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
                <img src={LandingPageImg} className="landingDesk" />
                <img src={LandingPageImgMobile} className="landingMob" />
            </ContainerFooter>
        </ContainerPage>
    );
};

export default LandingPage;

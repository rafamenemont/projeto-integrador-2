import styled from "styled-components";
import { BiLogIn, BiUserPlus } from 'react-icons/bi';

export const ContainerPage = styled.div`
    display: grid;
    grid-template-rows: 84px auto 250px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nb nb"
                        "hd lt"
                        "im im";

    width: 100%;
    height: 100%;
    min-height: 100vh;

    background: ${({ theme }) => theme.black};

    @media only screen and (max-width: 1200px) {
        grid-template-rows: 84px auto 300px auto;
        grid-template-columns: 1fr;
        grid-template-areas: "nb"
                            "hd"
                            "im"
                            "lt";
    }

    @media only screen and (max-width: 768px) {
        grid-template-rows: 84px auto 250px auto;
        grid-template-columns: 1fr;
        grid-template-areas: "nb"
                            "hd"
                            "im"
                            "lt";
    }
`;

export const Navbar = styled.div`
    grid-area: nb;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 150px;

    position: relative;

    background: ${({ theme }) => theme.black};

    &:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 1px;
        
        background-image: linear-gradient(to right, transparent,  ${({ theme }) => theme.toggleBorder}, transparent);
    }

    > li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        list-style-type: none;
    }

    > li img {
        width: 35px;
    }

    > li p {
        font-family: ${({ theme }) => theme.fontTheme};
        text-transform: uppercase;
        font-weight: 900;
    }

    @media only screen and (max-width: 1200px) {
        padding: 0 100px;

        > li {
            gap: 15px;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 0 15px;

        > li {
            gap: 5px;
        }

        > li p {
            display: none;
        }
    }
`

export const ContainerHeader = styled.div`
    grid-area: hd;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    padding: 50px 100px 50px 150px;

    position: relative;

    background: ${({ theme }) => theme.black};

    &:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;

        width: 1px;
        height: 100%;
        
        background-image: linear-gradient(to bottom, ${({ theme }) => theme.toggleBorder}, transparent, transparent);
    }

    > p {
        color: ${({ theme }) => theme.textDetail};
        font-weight: 900;
        font-size: 12px;
        filter: opacity(0.7);
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    > h1 {
        font-size: 38px;
    } 

    > .group-button {
        display: flex;
        gap: 25px;
        margin-top: 30px;
    }

    @media only screen and (max-width: 1200px) {
        align-items: center;
        padding: 100px;

        &:before{
            width: 0;
            height: 0;
        }

        > h1 {
            text-align: center;
        }

        > .group-button {
            gap: 15px;
        }
    }

    @media only screen and (max-width: 768px) {
        align-items: center;
        padding: 50px 25px;

        > h1 {
            font-size: 34px;
            text-align: center;
        }

        > .group-button {
            gap: 5px;
        }
    }
`

export const ContainerList = styled.div`
    grid-area: lt;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    padding: 50px 150px 50px 100px;

    background: ${({ theme }) => theme.black};

    > .card {
        display: flex;
    }

    > .card .card-header p {
        font-family: ${({ theme }) => theme.fontTheme};
        font-weight: 900;
        font-size: 10px;
        filter: opacity(0.3);
    }

    > .card .card-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-left: 50px;
    }

    > .card .card-content h2 {
        font-family: ${({ theme }) => theme.fontTheme};
    }

    > .card .card-content p {
        font-family: ${({ theme }) => theme.fontTheme};
        font-weight: 100;
        font-size: 13px;
        filter: opacity(0.7);
        line-height: 25px;
    }

    @media only screen and (max-width: 768px) {
        padding: 100px;
    }

    @media only screen and (max-width: 768px) {
        padding: 50px 25px;
    }
`

export const ContainerFooter = styled.div`
    grid-area: im;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    
    background: ${({ theme }) => theme.black};

    > img.landingDesk {
        position: absolute;
        bottom: 0;
    }

    > img.landingMob {
        display: none;
    }

    @media only screen and (max-width: 1200px) {
        > img.landingDesk {
            display: none;
        }

        > img.landingMob {
            display: block;
            position: relative;
            width: 350px;
        }
    }

    

    @media only screen and (max-width: 768px) {
        > img.landingMob {
            width: 250px;
        }
    }
`

export const IconSignIn = styled(BiLogIn)`
    color: ${({ theme }) => theme.text};
    margin-left: -15px;
    font-size: 18px;
`

export const IconSignUp = styled(BiUserPlus)`
    color: ${({ theme }) => theme.text};
    margin-left: -15px;
    font-size: 18px;
`
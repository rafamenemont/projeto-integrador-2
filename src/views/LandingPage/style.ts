import styled from "styled-components";

export const ContainerPage = styled.div`
    display: grid;
    grid-template-rows: 84px auto 200px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nb nb"
                        "hd lt"
                        "im im";

    width: 100%;
    height: 100%;
    min-height: 100vh;

    background: ${({ theme }) => theme.bodyComponent};
`;

export const Navbar = styled.div`
    grid-area: nb;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 150px;

    position: relative;

    background: ${({ theme }) => theme.bodyComponent};

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
`

export const ContainerHeader = styled.div`
    grid-area: hd;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    padding: 50px 100px 50px 150px;

    position: relative;

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

    background: ${({ theme }) => theme.bodyComponent};

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
`

export const ContainerFooter = styled.div`
    grid-area: im;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    

    > img {
        position: absolute;
        bottom: 0;
    }
`
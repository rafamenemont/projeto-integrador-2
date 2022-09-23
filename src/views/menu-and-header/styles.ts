import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: 100vh;
  background: ${({ theme }) => theme.darkerBlack};
`;

export const BurgerMenu = styled.div`
  height: 105px;
  display: flex;
  margin-top: -30px;
  margin-left: -9px;
  img {
    width: 60px;
    cursor: pointer;
  }
`;

export const StyledMenuContainer = styled.div`
  /* position: relative; */
  min-height: 90vh;
  padding: 44px 0 40px 0;
  transition: all 300ms ease-in-out;
  font-size: 16px;
  color: white;
  background: ${({ theme }) => theme.darkerBlack};
  border-right: grey 2px solid;
  display: flex;
  align-self: center;
  justify-content: center;
  border-color: rgba(228, 228, 228, 0.1);
  display: none;
  svg {
    min-width: 30px;
    min-height: 30px;
  }
  .logo {
    width: 48px;
    margin-top: 4px;
  }

  #sidebarMenu {
    height: 100%;
    padding: 13px;
    border-top: 1px solid #E4E4E4;
    border-color: rgba(228, 228, 228, 0.1);
    margin-top: 20px;
    transition: all 300ms ease-in-out;
  }

  input[type='checkbox']:checked ~ #sidebarMenu {
    width: 350px;
  }
  input[type='checkbox'] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
  }

  .sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index:1;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
    margin: 14px;
  }

  input[type='checkbox']:checked ~ .sidebarIconToggle {
    margin-left: 249px;
  }

`;

export const StyledContainerPage = styled.div`
  min-height: 786px;
  height: 100%;
  background-color: #f1f1f1;
  padding: 0 30px 55px 30px;
  min-height: 100vh;
  background: ${({ theme }) => theme.darkerBlack};
  margin: auto;
`;
